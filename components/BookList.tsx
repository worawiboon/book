import { fetchBook } from "@/app/utils/actions"

const BookList = async() => {
        const camps = await fetchBook()
        console.log(camps)

  return (
    <div>
        {
            camps.map((item, index)=>{
                return <li key={index}>{item.title}</li>
            })
        }
    </div>
  )
}
export default BookList