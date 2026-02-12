'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Dashboard() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [bookmarks, setBookmarks] = useState<any[]>([])
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

useEffect(() => {
  let channel: any

  const init = async () => {
    const { data } = await supabase.auth.getSession()
    const currentUser = data.session?.user ?? null

    setUser(currentUser)
    setLoading(false)

    if (!currentUser) {
      window.location.href = '/'
      return
    }

    // Initial fetch using currentUser directly
    fetchBookmarks(currentUser.id)

    // Realtime subscription AFTER user exists
    channel = supabase
      .channel('bookmarks-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'bookmarks',
          filter: `user_id=eq.${currentUser.id}`
        },
        () => fetchBookmarks(currentUser.id)
      )
      .subscribe()
  }

  init()

  return () => {
    if (channel) supabase.removeChannel(channel)
  }
}, [])




  const fetchBookmarks = async (userId?: string) => {
  const id = userId ?? user?.id
  if (!id) return

  const { data, error } = await supabase
    .from('bookmarks')
    .select('*')
    .eq('user_id', id)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Fetch bookmarks error:', error)
    return
  }

  setBookmarks(data || [])
}


const addBookmark = async () => {
  if (!user || !title || !url) return

  await supabase.from('bookmarks').insert({
    title,
    url,
    user_id: user.id
  })

  setTitle('')
  setUrl('')
}


  const deleteBookmark = async (id: string) => {
    await supabase.from('bookmarks').delete().eq('id', id)
    fetchBookmarks()
  }

  const logout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Bookmarks</h1>

      <div className="flex gap-2 mb-4">
        <input
          placeholder="Title"
          className="border p-2 flex-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="URL"
          className="border p-2 flex-1"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
        onClick={addBookmark}
        disabled={!user || loading}
        className="bg-blue-500 text-white px-4 disabled:opacity-50"
        >
        Add
        </button>


      </div>

      <ul>
        {bookmarks.map((b) => (
          <li key={b.id} className="flex justify-between border-b py-2">
            <a href={b.url} target="_blank" className="text-blue-600">
              {b.title}
            </a>

            <button
              onClick={() => deleteBookmark(b.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={logout}
        className="mt-6 bg-black text-white px-4 py-2"
      >
        Logout
      </button>
    </div>
  )
}
