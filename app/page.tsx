'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">



<section className="flex flex-col items-center justify-center text-center px-6 mt-32 max-w-2xl mx-auto space-y-6">
  <h2 className="text-5xl font-bold text-white tracking-tight">당신의 신원을 묻지 않습니다</h2>

  <p className="text-lg text-gray-300 leading-relaxed">
    우리는 프라이버시를 상품으로 팔지 않습니다.  
    SkugVPN은 당신의 자유와 사생활을  
    누구에게도 묻지 않고 지킬 수 있도록 설계되었습니다.
  </p>

  <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 text-gray-200 text-sm leading-relaxed backdrop-blur-sm shadow-lg">
    <p className="mb-4">
      당신이 누구든, 어디서든, 우리는 당신을 기록하지 않습니다.  
      로그는 수집되지 않으며, 그럴 수 없도록 만들어졌습니다.
    </p>
    <p>
      SkugVPN은 믿음을 요구하지 않습니다.  
      믿지 않아도 지켜지는 인터넷, 그 시작을 함께하세요.
    </p>
  </div>

  <Link
    href="/signup"
    className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold text-base transition shadow-lg"
  >
    키 발급받기 →
  </Link>
</section>

<section className="mt-32 max-w-4xl mx-auto px-6">
  <h3 className="text-3xl font-bold text-white text-center mb-12">자주 묻는 질문</h3>

  <div className="grid gap-6 md:grid-cols-2">
    {/* 카드 1 */}
    <div className="bg-[#1f1f1f] rounded-xl p-6 border border-gray-700 shadow hover:shadow-md transition">
      <h4 className="text-white font-semibold mb-2">정말 로그를 수집하지 않나요?</h4>
      <p className="text-sm text-gray-300 leading-relaxed">
        네. 로그 파일 자체를 생성하지 않으며, 실시간 처리 후 즉시 폐기되도록 설계되어 있습니다.  
        운영 서버는 디스크 기록 권한이 없으며, 메모리 기반 처리만 허용됩니다.
      </p>
    </div>

    {/* 카드 2 */}
    <div className="bg-[#1f1f1f] rounded-xl p-6 border border-gray-700 shadow hover:shadow-md transition">
      <h4 className="text-white font-semibold mb-2">익명인데도 악용 차단은 가능한가요?</h4>
      <p className="text-sm text-gray-300 leading-relaxed">
        키 1개당 세션 수 제한, Abuse API, 자동 트래픽 패턴 분석 등으로  
        개인정보 없이도 이상 사용을 감지하고 차단할 수 있습니다.
      </p>
    </div>

    {/* 카드 3 */}
    <div className="bg-[#1f1f1f] rounded-xl p-6 border border-gray-700 shadow hover:shadow-md transition">
      <h4 className="text-white font-semibold mb-2">자동 트래픽 분석은 결국 우리의 활동을 본다는 뜻 아닌가요?</h4>
      <p className="text-sm text-gray-300 leading-relaxed">
        아닙니다. SkugVPN은 내용이 아닌 패턴만 감지하며,  
        이는 실시간으로만 처리되고 저장되지 않으며,  
        특정 사용자를 식별할 수 없는 방식으로 이루어집니다.
      </p>
    </div>

    {/* 카드 4 */}
    <div className="bg-[#1f1f1f] rounded-xl p-6 border border-gray-700 shadow hover:shadow-md transition">
      <h4 className="text-white font-semibold mb-2">서버 위치나 접속 시간도 기록 안 하나요?</h4>
      <p className="text-sm text-gray-300 leading-relaxed">
        접속 로그는 남기지 않으며, 서버 부하나 트래픽 양은  
        개인을 식별할 수 없도록 통계화하여 저장됩니다.
      </p>
    </div>
  </div>
</section>


    </main>
  )
}
