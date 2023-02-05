import Header from '@/components/Header'
import Provider from './Provider'
import './globals.css'


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
      <Provider>
        {/* header */}
       <Header/>
      {/* navbar */}

      {/* searchbox */}

      {children}
      </Provider>
      </body>
    </html>
  )
}
