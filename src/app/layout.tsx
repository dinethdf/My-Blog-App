import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Developer Blog site',
  description: 'A blog site for developers to share knowledge and insights',
}

export default function RootLayout({ children } : { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            {children}
          </div>
        </div>
        </body>
    </html>
  )
}
