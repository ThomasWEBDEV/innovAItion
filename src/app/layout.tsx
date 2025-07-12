import './globals.css'

export const metadata = {
  title: 'InnovAItion - Agrégateur IA',
  description: 'Agrégateur d\'actualités IA avec résumés automatiques',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
