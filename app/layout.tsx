import Navbar from "@/components/Navbar"
import './globals.css'
import { Metadata } from "next"
import { ReactNode } from "react"


export const metadata: Metadata ={
  title:'Worawiboon NextJs',
  description:'เว็บไซต์แนะนำตัวทำมาจาก NextJs',
  keywords:'worawiboon, Nextjs'
}

const layout = ({children}:{children:ReactNode}) => {
  return (
    <html>
      <body>
    <Navbar></Navbar>
  {children}
      </body>

    </html>
  )
}

export default layout