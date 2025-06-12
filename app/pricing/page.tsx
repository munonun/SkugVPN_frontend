'use client'

import Link from 'next/link'

export default function PricingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-white">
      <h1 className="text-4xl font-bold text-center">투명한 요금제</h1>
      <p className="text-gray-400 text-center mt-4">
        SkugVPN은 당신의 신원을 묻지 않습니다.<br />
        요금도 단순하고 익명으로 결제할 수 있습니다.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow">
          <h2 className="text-xl font-bold">30일</h2>
          <p className="text-3xl font-bold mt-2">$4</p>
          <p className="text-sm text-gray-400 mt-2">짧게 체험하고 싶은 분을 위해</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 shadow">
          <h2 className="text-xl font-bold">90일</h2>
          <p className="text-3xl font-bold mt-2">$8</p>
          <p className="text-sm text-gray-400 mt-2">조금 더 저렴하게</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-yellow-600 shadow">
          <h2 className="text-xl font-bold">1년</h2>
          <p className="text-3xl font-bold mt-2">$44</p>
          <p className="text-sm text-gray-400 mt-2">가장 경제적인 선택</p>
        </div>
      </div>

      <section className="mt-20 text-sm text-gray-300 max-w-3xl mx-auto text-center space-y-4">
        <h3 className="text-lg font-semibold text-white">결제는 익명으로 이루어집니다</h3>
        <p>
          우리는 이름, 이메일, 주소를 요구하지 않습니다.<br />
          결제는 <strong>암호화폐 (Monero, Bitcoin)</strong> 또는 <strong>신용카드 및 직불카드</strong>를 통해 이루어집니다.
        </p>
        <p>
          결제 완료 후에는 기간이 키에 자동으로 부여되며,<br />
          별도의 계정이 없어도 사용 가능합니다.
        </p>
      </section>

      <section className="mt-16 text-sm text-gray-400 max-w-2xl mx-auto space-y-2">
        <h4 className="text-white font-semibold mb-2">유의사항</h4>
        <ul className="list-disc ml-5 space-y-1">
          <li>분실한 키는 복구가 불가능합니다. 백업을 권장합니다.</li>
          <li>결제 후 환불은 30일까지 가능합니다.</li>
          <li>SkugVPN은 단일 기기 제한이 5개까지입니다.</li>
        </ul>
      </section>

      <div className="mt-12 text-center">
        <Link href="/signup" className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold">
          키 발급받기 →
        </Link>
      </div>
    </main>
  )
}
