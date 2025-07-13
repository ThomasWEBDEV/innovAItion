import './globals.css'
import React from 'react';

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
      <head>
        {/*
          Ceci est la ligne ajoutée pour le favicon.
          Assurez-vous d'avoir un fichier favicon.ico
          dans votre dossier 'public/' à la racine de votre projet.
        */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
