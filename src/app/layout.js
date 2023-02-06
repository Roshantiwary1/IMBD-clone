import Header from '@/components/Header'
import Provider from './Provider'
import './globals.css'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'


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
      <SearchBox/>
      {children}
      </Provider>
      </body>
    </html>
  )
}
