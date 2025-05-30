import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DAKSH SHARMA',
  description: 'DAKSH SHARMA',
  generator: 'DAKSH SHARMA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
