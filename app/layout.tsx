import './globals.css'
export const metadata = {
  title: 'REST API Countries',
  description: 'Generated by NEXT and made by Raihan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="lightModeBackground lightModeText">
        {children}
        </body>
    </html>
  )
}
