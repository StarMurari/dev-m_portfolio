import './globals.css'

export const metadata = {
  title: 'Murari Kumar | Full Stack Developer',
  description: 'Modern developer portfolio website',
  icons: {
    icon: '/images/kumar.jpg',
    apple: '/images/kumar.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

