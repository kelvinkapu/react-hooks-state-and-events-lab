import React ,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isOn, setIsOn] = useState(true)
  console.log({isOn,setIsOn})
  const appClass = isOn ? "App dark" : "App light"

  function handleClick(event){
    event.preventDefault();
    setIsOn(!isOn) 
  };
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{appClass}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}



export default App;
