import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <Fun
        name="Mobile Operating System"
        li1="Andriod"
        li2="BlackBerry"
        li3="iphone"
        li4="Windows phone"
      />
      ,
      <Fun
        name="Mobile Manufacturers"
        li1="Samsung"
        li2="HTC"
        li3="Micromax"
        li4="Apple"
      />
    </>
  );
}

function Fun(e) {
  return (
    <div className="App">
      <h1>{e.name}</h1>
      <ul>
        <li>{e.li1}</li>
        <li>{e.li2}</li>
        <li>{e.li3}</li>
        <li>{e.li4}</li>
      </ul>
    </div>
  );
}

export default App;
