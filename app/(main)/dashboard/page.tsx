'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { get, del } from 'idb-keyval'
import Head from 'next/head'
import QRCode from 'react-qr-code'

export default function DashboardPage() {
  const [key, setKey] = useState<string | null>(null)
  const [createdAt, setCreatedAt] = useState<Date | null>(null)
  const [expiresAt, setExpiresAt] = useState<Date | null>(null)
  const [reveal, setReveal] = useState(false)
  const [activeSection, setActiveSection] = useState<'key' | 'subscription' | 'guide' | 'about'>('key')
  const router = useRouter()

  useEffect(() => {
    const loadKey = async () => {
      const encrypted = await get('skugvpn_key')
      const created = await get('skugvpn_created_at')

      if (!encrypted) {
        router.push('/login')
      } else {
        const decrypted = atob(encrypted)
        setKey(decrypted)
        if (created) {
          const createdDate = new Date(created)
          setCreatedAt(createdDate)
          const expiry = new Date(createdDate)
          expiry.setDate(expiry.getDate() + 30)
          setExpiresAt(expiry)
        }
      }
    }
    loadKey()
  }, [router])

  const handleLogout = async () => {
    await del('skugvpn_key')
    await del('skugvpn_created_at')
    router.push('/login')
  }

  const formatDate = (date: Date | null) =>
    date ? date.toLocaleString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) : '-'

  const daysLeft = expiresAt ? Math.max(0, Math.ceil((+expiresAt - +new Date()) / (1000 * 60 * 60 * 24))) : null

  return (
    <>
      <Head>
        <title>SkugVPN 대시보드</title>
        <meta name="description" content="SkugVPN 키 기반 로그인 대시보드입니다. 개인 정보 없이 VPN 사용을 시작하세요." />
      </Head>
      <main className="flex text-white min-h-screen">
        <aside className="w-52 bg-gray-900 p-4 space-y-4 text-sm">
          <h2 className="text-lg font-bold mb-4">대시보드</h2>
          <ul className="space-y-2">
            <li><button onClick={() => setActiveSection('key')} className="hover:text-blue-400">🔐 키 정보</button></li>
            <li><button onClick={() => setActiveSection('subscription')} className="hover:text-blue-400">📅 구독 정보</button></li>
            <li><button onClick={() => setActiveSection('guide')} className="hover:text-blue-400">🛰 연결 가이드</button></li>
            <li><button onClick={() => setActiveSection('about')} className="hover:text-blue-400">🔒 개인정보 관련</button></li>
            <li><button onClick={handleLogout} className="text-red-400 hover:text-red-300 mt-4">🚪 로그아웃</button></li>
          </ul>
        </aside>

        <section className="flex-1 px-10 py-10">
          <h1 className="text-3xl font-bold mb-6">SkugVPN 대시보드</h1>

          {key && activeSection === 'key' && (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">🔐 키 정보</h2>
              <div className="bg-black px-4 py-3 rounded-md font-mono break-all">
                {reveal ? key : '*'.repeat(key.length)}
              </div>
              <div className="flex items-center gap-4">
                <button onClick={() => setReveal(!reveal)} className="text-blue-400 hover:text-blue-300 text-xs">
                  {reveal ? '숨기기' : '표시하기'}
                </button>
                <button onClick={() => navigator.clipboard.writeText(key)} className="text-blue-400 hover:text-blue-300 text-xs">
                  복사하기
                </button>
              </div>
              <div className="w-40 mt-4">
                <QRCode value={key} bgColor="#000000" fgColor="#ffffff" size={128} />
              </div>
            </div>
          )}

          {activeSection === 'subscription' && (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">📅 구독 정보</h2>
              <p>생성일자: {formatDate(createdAt)}</p>
              <p>만료일자: {formatDate(expiresAt)}</p>
              <p>남은 기간: {daysLeft != null ? `${daysLeft}일` : '-'}</p>
            </div>
          )}

          {activeSection === 'guide' && (
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">🛰 연결 가이드</h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>Android 연결 가이드 (준비 중)</li>
                <li>Windows 연결 가이드 (준비 중)</li>
                <li>WireGuard 설정 보기 (준비 중)</li>
              </ul>
            </div>
          )}

          {activeSection === 'about' && (
            <div className="text-yellow-400 text-sm">
              우리는 당신을 기록하지 않습니다. 당신의 키는 이 장치에만 존재합니다.
            </div>
          )}
        </section>
      </main>
    </>
  )
}
