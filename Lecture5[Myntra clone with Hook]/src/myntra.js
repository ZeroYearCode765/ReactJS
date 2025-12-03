import React , {useState }from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy"
import {greet as goa, meet as roa} from "./utils/dummy"


function App(){
  
  // hook use useState
  let [A,setA] = useState(arr);
  function filterButton() {
    A.sort((a,b) => a.price - b.price);
    setA([...A]); 
  }
  
  return(<>
    <Header/>

    {// Body section 
    }
    <div className="middle" style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
        {
          A.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer} price = {value.price}/>)   
        }
        <button className="filter"onClick={filterButton}>Price Filter</button>

    </div>
    <Footer/>
    </>
  )
}


const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);