'use client'

import { supabase } from '@/lib/supabaseClient'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser()
      if (data.user) {
        window.location.href = '/dashboard'
      }
    }

    checkUser()
  }, [])

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <button
        onClick={signIn}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </main>
  )
}
