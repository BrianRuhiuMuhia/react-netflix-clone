import Modal from "../components/Modal"
import accordionData from "./accordianData"
export default function Modals()
{ 
const accordian=accordionData.map((data)=>{
return <Modal title={data.title} content={data.content}/>
})
return(
    <div>
        { accordian}
    </div>

)
}