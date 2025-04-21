import './globals.css'

export const metadata = {
  title: "Humza Baig | Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-fixed bg-no-repeat bg-gradient-to-b from-black via-[#31004a] to-[#12021a] bg-[length:100%_300%] bg-no-repeat text-white">
        {children}
      </body>
    </html>
  )
}


