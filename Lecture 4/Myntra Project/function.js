// Copy Sirs Files Here from his notes here
function Greet(props) {
    console.log(props);
    return <h2>Hello Bhaiya {props.name} {props.age}</h2>
};

const element2 = <Greet name="Rohit Negi" age="23"/>

// const element3 = <h1 id="first" className="Second"></h1>

// <Greet/>: Function call
// <div> <h1> <ul>
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(element2);