import React from "react";
import ReactDOM from "react-dom/client";

// 1st Creating Cards inside a function 
function Card(props) {
    return (
        <div style = {{border: "2px solid black",
      padding: "10px",
      height: "400px",
      width: "400px",
      background: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px"}}>
            <img src="https://assetsio.gnwcdn.com/doomheader_KL7ZbrZ.jpg?width=690&quality=85&format=jpg&dpr=1.5&auto=webp" width = "300px" height = "300px" />
            <br/>
            <h2 style={{textAlign : "center",color : "white"}}>{props.name}</h2>
        </div>
    )
}

const information = [
    {
        image : "1.jpg",
        name : "Doom Eternal"
    },
    {
        image : "2.jpg",
        name : "Doom The Dark Ages",
    },
    {
        image : "3.jpg",
        name : "Doom 2016"
    }
]

// Function to render the cards inside root div.
function App() {
    return(
        <div style={{display : "flex" , padding : "10px", gap : "10px", flexWrap : "wrap" }}>
            {
            information.map((value,index) => (
                <Card key = {index}  name = {value.name}/>
            ))
            }
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);