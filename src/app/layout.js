import Header from '@/components/Header'
import Provider from './Provider'
import './globals.css'
import Navbar from '@/components/Navbar'


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
      <Provider>
        {/* header */}
       <Header/>
      {/* navbar */}
        <Navbar/>
      {/* searchbox */}

      {children}
      </Provider>
      </body>
    </html>
  )
}
