import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/body";
import doomGames from "./utils/dummydata";

function App() {

  let [Arr, SetArr] = useState(doomGames);

  function SortbyPrice() {
      const sorted = [...Arr].sort((a, b) => a.price - b.price);
      SetArr(sorted);
  }

  return (
    <>
      <button id="sort-by-price" onClick={SortbyPrice}>Click to Sort by Price</button>

      <div id="Cards">
        {Arr.map((value, index) => (
          <Body
            key={index}
            name={value.name}
            price={value.price}
            review={value.review}
          />
        ))}
      </div>
    </>
  );
}

const Root  = ReactDOM.createRoot(document.getElementById("root")) ;
Root.render(<App/>);
