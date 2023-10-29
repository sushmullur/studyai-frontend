import './globals.css'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'; 

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'learn stream',
  description: '',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider> {/* Wrap your content with UserProvider */}
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
