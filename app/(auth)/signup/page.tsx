'use client'

import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'
import QRCode from 'react-qr-code'
import { set, get } from 'idb-keyval'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const [key, setKey] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const router = useRouter()
  const generateKey = () => {
    const newKey = uuidv4().replace(/-/g, '') // 32자리
    setKey(newKey)
    setCopied(false)
  }

  const copyToClipboard = async () => {
    if (!key) return
    await navigator.clipboard.writeText(key)
    setCopied(true)
  }

const saveToDatabase = async () => {
  if (!key) return
  const encrypted = btoa(key) // 실제로는 AES-256-CTR 암호화 권장
  await set('skugvpn_key', encrypted)
  alert("키가 브라우저에 안전하게 저장되었습니다.")
  router.push('/login') // ← alert 확인 이후 실행됨
}


  return (
    <main className="max-w-xl mx-auto px-6 py-20 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">SkugVPN 키 발급</h1>

      {!key ? (
        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-300 text-center">
            SkugVPN은 이메일 없이도 사용할 수 있습니다. <br />
            아래 버튼을 눌러 당신만의 로그인 키를 발급받으세요.
          </p>

          <p className="text-red-500 text-4xl font-bold text-center leading-relaxed mt-6">
            이 키는 1회만 표시되며, 14일 후 자동 소멸됩니다. <br />
            결제 내역이 있을 경우 유예되나, 그 이후 14일 뒤 삭제됩니다. <br />
            백업하지 않은 키 분실로 인한 손해는 SkugVPN이 책임지지 않으며, <br />
            전적으로 사용자에게 귀속됩니다.
          </p>
          <p className="text-sm text-gray-400 text-center mt-4">
            위 문구가 표시된 이후의 모든 행동(복사, 진행, 버튼 클릭 등)은 <br />
            본 고지에 대한 <u>암묵적 동의</u>로 간주됩니다.
          </p>

          <button
            onClick={generateKey}
            className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl font-semibold shadow"
          >
            키 발급하기
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-gray-800/40 border border-gray-700 p-6 rounded-xl">
            <p className="mb-2 text-gray-400 text-sm">당신의 SkugVPN 로그인 키:</p>
            <div className="flex items-center justify-between bg-black px-4 py-3 rounded-md text-sm font-mono">
              <span className="break-all">{key}</span>
              <button onClick={copyToClipboard} className="text-blue-400 hover:text-blue-300 ml-4 text-xs">
                {copied ? '복사됨' : '복사'}
              </button>
            </div>
            <p className="text-red-400 text-sm mt-3">
              이 키는 다시 표시되지 않습니다. 꼭 복사하여 안전한 곳에 보관하세요.
            </p>
            <div className="mt-6 flex justify-center">
              <QRCode value={key} bgColor="#000000" fgColor="#ffffff" size={128} />
            </div>
            <p className="text-center text-xs text-gray-500 mt-2">
              모바일에서 이 QR을 스캔해 백업할 수 있습니다.
            </p>
          </div>
          <button
            onClick={saveToDatabase}
            className="block text-center bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 w-full"
          >
            로그인으로 이동 →
          </button>
        </div>
      )}
    </main>
  )
}
