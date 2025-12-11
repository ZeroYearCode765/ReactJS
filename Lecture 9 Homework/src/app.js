import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./component/body";

function GithubProfile() {
    return(
        <Body/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GithubProfile/>)