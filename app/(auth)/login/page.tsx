'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { get, set } from 'idb-keyval'

export default function LoginPage() {
  const [inputKey, setInputKey] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    const encrypted = await get('skugvpn_key')

    if (!encrypted) {
      setError('아직 키를 발급받지 않았습니다.')
      return
    }

    try {
      const decrypted = atob(encrypted)
      if (inputKey === decrypted) {
        await set('skugvpn_logged_in', true)
        alert('로그인에 성공했습니다.')
        router.push('/dashboard')
      } else {
        setError('키가 일치하지 않습니다.')
      }
    } catch (e) {
      setError('저장된 키를 복호화할 수 없습니다.')
    }
  }

  return (
    <main className="max-w-md mx-auto px-6 py-20 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">SkugVPN 로그인</h1>

      <div className="space-y-4">
        <p className="text-gray-300 text-sm">발급받은 키를 입력하세요:</p>
        <input
          type="text"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-sm text-white"
          placeholder="여기에 키를 입력하세요"
        />

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-500 transition px-4 py-3 rounded-xl font-semibold shadow"
        >
          로그인
        </button>
      </div>
    </main>
  )
}
