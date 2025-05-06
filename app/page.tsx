import Link from "next/link";

export const page = async() => {
  await new Promise((resolver)=>setInterval(resolver, 1000))
  return (
    <>
      
      
      <h1>Hello World</h1>
    <p>description</p>
    
    </>
  )
}
export default page;