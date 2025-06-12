'use client'

import React from 'react'

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 space-y-10 text-gray-100 leading-relaxed">
      <h1 className="text-4xl font-bold text-white">우리는 왜 SkugVPN을 만들었는가</h1>

      <p>
        우리는 프라이버시를 지켜야 했습니다. 하지만 기존 VPN은 신뢰할 수 없었고,  
        "로그 없음"이라는 문장 뒤에 감춰진 수많은 거짓을 보았습니다.  
        SkugVPN은 이 모든 불신에서 시작되었습니다.
      </p>

      <h2 className="text-2xl font-semibold text-white">신뢰가 아닌 구조로 증명합니다</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>키 기반 익명 인증, 이메일 불필요</li>
        <li>로그 파일 생성 자체 차단</li>
        <li>운영자도 사용자를 식별 불가능</li>
        <li>디스크 기록 권한 제거, 메모리 기반 처리</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white">우리는 당신을 알 수 없습니다</h2>
      <p>
        SkugVPN은 당신을 보호하기 위해,  
        당신을 알아야 할 이유 자체를 제거했습니다.  
        당신이 누구든, 어디서든, 우리는 모릅니다. 그리고 그게 좋습니다.
      </p>

      <p className="text-center mt-12 text-lg font-semibold text-gray-400 italic">
        SkugVPN은 우리가 직접 믿을 수 있는 인터넷을 만들기 위한 도구입니다.
      </p>
    </section>
  )
}
