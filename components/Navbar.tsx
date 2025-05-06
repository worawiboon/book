import Link from 'next/link'


const Navbar = () => {
return (
    <>
        <nav className='flex justify-between text-2xl bg-lime-300 shadow-md my-4 p-3'>
    <div className=" flex gap-4">
    <Link href='/'>Home</Link>
    <Link href='/about'>AboutMe</Link>
    <Link href={'/info'}>Info</Link>
    <Link href={'/book'}>Book</Link>
    
    </div>
    <div className='flex gap-4'>
    <Link href={'/login'}>Login</Link>
    <Link href={'/register'}>Register</Link></div>
    </nav>
    <hr className='mb-4>'></hr>
    </>
)
}

export default Navbar