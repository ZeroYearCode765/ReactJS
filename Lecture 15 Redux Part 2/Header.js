import {useSelector} from "react-redux"

export default function Header(){
    
   const count =  useSelector((state)=>state.slice2.count)   // it has access to slice 2 beacuse of myntra.js Provider function

    return (
        <div style={{display:"flex", justifyContent:"center", gap:"30px"}}>
        <h1>Swiggy</h1>
        <h2>Cart: ({count})</h2>
        </div>
    )
}