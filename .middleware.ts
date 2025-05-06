import { NextResponse } from "next/server"

export const middleware = (req:Request)=>{
    console.log('HelloJukkrer')
    return NextResponse.redirect(new URL('/', req.url))

}


export const config = {
    matcher: ["/about/:path*", "/info/:path*"],
}