'use server'

import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'

export const createCamps = async(prevState:any,formData:FormData)=>{
    await new Promise((resolver)=>setInterval(resolver, 1000))
    // const title = formData.get('title')
    // const location = formData.get('location')
    const rawData = Object.fromEntries(formData)
    console.log(rawData)
    //revalidatePath('/camp')
    // redirect('/')
    return 'create book success!!'

}

export const fetchBook = async()=>{

    const camps = [
        {id:1, title:'หนังสือคณิตศาสตร์ ม.1'},
        {id:2, title:'หนังสือวิทยาศาสตร์ ม.1'},
        {id:3, title:'หนังสือนิทาน'}
    ]
    return camps
}