import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rahul Rajput',
  description: 'I am a passionate coder with a keen interest in learning about new technologies.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  icons: {
    icon: 'https://i.postimg.cc/Xq8SWwwz/Screenshot-2023-11-18-235925.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='line'></div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
