import './globals.css'

export const metadata = {
  title: 'Portfolio - Developer',
  description: 'Modern developer portfolio website',
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

