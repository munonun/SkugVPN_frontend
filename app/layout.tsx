// app/layout.tsx
import './globals.css'
import Navbar from './components/Navbar' // 경로는 실제 구조에 맞게 조정

export const metadata = {
  title: 'SkugVPN',
  description: 'Your key to privacy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-950 text-white">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
