'use client'
import { createCamps } from "@/app/utils/actions"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"


const SubmitButton =()=>{
    const { pending } = useFormStatus()

    return <button type="submit" disabled={pending}>
        {pending
        ? 'Submiting'
        :'Submit'
    
    }

    </button>
}


const Form = () => {
    const [message, formAction]= useActionState(createCamps,null)



return(<> 
{message && <h1>{message}</h1>}
<form action={formAction}>
    
    <input className="border" 
    placeholder="Book Name" 
    name="title"
    defaultValue="หนังสือเรียน"/>
    <input placeholder="ชื่อผู้ซื้อ"
            name="name"
            className="border"
            defaultValue="วรวิบูล"/>
            <SubmitButton/>
</form>
</>)
}

export default Form