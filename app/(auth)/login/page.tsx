"use client"
import { useState } from "react"


export const loginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() 
    clickLogin(username, password)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <form onSubmit={handleSubmit}>
      <input value={username} type="text" className="border rounded-xl p-3 my-2" id="username" onChange={(e) => setUsername(e.target.value)}></input><br></br>
      <input value={password} type="password" className="border rounded-xl p-3" id="password" onChange={(e) => setPassword(e.target.value)}></input><br></br>
      <button className="border p-3 rounded-xl bg-green-500 my-4 " onClick={handleSubmit} type="submit">Login</button>

      </form>
    </div>
  )
}

export function clickLogin(username: string, pass: string) {
  console.log('Username:', username)
  console.log('Password:', pass)
}
export default loginPage