'use client'
import Providers from './providers'
import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <MantineProvider>
          <Providers>{children}</Providers>
        </MantineProvider>
      </body>
    </html>
  )
}
