import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Skinn - Premium Beauty & Cosmetics Shop',
  description: 'Discover premium skincare and cosmetics for every skin type at Skinn Beauty Shop',
  keywords: 'beauty, cosmetics, skincare, makeup, premium beauty products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}