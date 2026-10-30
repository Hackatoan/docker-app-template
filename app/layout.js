import './globals.css'

export const metadata = { title: 'App' }

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <a href='#main' id='skip-to-content'>Skip to content</a>
        <main id='main'>{children}</main>
      </body>
    </html>
  )
}
