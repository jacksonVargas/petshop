import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  title: 'PetLove',
  description: 'A felicidade do seu pet é a nossa prioridade.',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    },
  },
  openGraph: {
    title: 'PetLove',
    description: 'A felicidade do seu pet é a nossa prioridade.',
    images: ['/preview.png'],
    type: 'website'
  }
}

const font = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
