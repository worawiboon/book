import Link from "next/link"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos =async()=>{
    await new Promise((resolver)=>setInterval(resolver, 1000))

        const res = await fetch(url)
        const data = res.json()
        //console.log(url)
        return data
    }

type Data = {
    id: string;
    complete: string;
    title: string;
    userId: string;
}


export const AboutMe = async() => {
    const data: Data[] = await fetchTodos();
    
    console.log(data)
    
return (
    <>
    AboutMepage
    {
        data.map((item, index)=>{
            return <li key={index}>{item.title}</li>
        })
    }
    </>
)
}

export default AboutMe
