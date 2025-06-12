'use client'

import '../globals.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { get, del } from 'idb-keyval'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkLoginStatus = async () => {
      const key = await get('skugvpn_key')
      const loggedIn = await get('skugvpn_logged_in')
      setIsLoggedIn(!!key && loggedIn === true)
    }
    checkLoginStatus()
  }, [pathname])

  const handleLogout = async () => {
    await del('skugvpn_key')
    await del('skugvpn_created_at')
    await del('skugvpn_logged_in')
    setIsLoggedIn(false)
    router.push('/login')
  }

  return (
    <header className="bg-[#1a1a1a] text-white py-4 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2 font-bold text-lg tracking-wide">
        <div className="w-3 h-3 bg-white rounded-full" />
        <Link href="/"><span>SKUGVPN</span></Link>
      </div>

      <nav className="space-x-6 text-lg text-gray-300">
        <Link href="/about" className="hover:text-white"><strong>정보</strong></Link>
        <Link href="/pricing" className="hover:text-white"><strong>가격</strong></Link>
        <Link href="/servers" className="hover:text-white"><strong>서버</strong></Link>
        <Link href="/download" className="hover:text-white"><strong>다운로드</strong></Link>
        <Link href="/help" className="hover:text-white"><strong>도움말</strong></Link>
      </nav>

      <div className="flex items-center space-x-4">
        {isLoggedIn === null ? null : (
          <>
            <Link href={isLoggedIn ? "/dashboard" : "/login"} className="hover:text-white text-sm">계정</Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md font-semibold text-sm transition"
              >
                로그아웃
              </button>
            ) : (
              <Link
                href="/signup"
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md font-semibold text-sm transition"
              >
                시작하기
              </Link>
            )}
          </>
        )}
      </div>
    </header>
  )
}
