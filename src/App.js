import React, { useState } from 'react';
import Items from './Items';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


const App = () => {

  const[AddItem, setAddItem] = useState("");
  const[AddedValue, setAddedValue] = useState([])


  const InputEvent = (event) => {

    setAddItem(event.target.value);
  
  };
  
const Added = () => {
//alert('work');

setAddedValue((oldItems) => {
        return[...oldItems, AddItem]
    });
    setAddItem('');
};


const cross = (id) => {
console.log('deleted')
  setAddedValue( (oldItems) => {
     return oldItems.filter( (arrEle, index) => {
          return index !== id;
     });
  });
};

  return (

    <>
    <div className = 'main_div'>
      <div className = 'center_div'>
        <h1>ToDo App</h1><br />
        <input onChange={InputEvent} name = 'items' value = {AddItem}
        type = 'text' placeholder = 'Add Items' />
        <button onClick = {Added}> + </button><br/>

        <ol>
        {/* <li><i class="fa fa-times" aria-hidden="true"></i> 
        <span style = {{marginLeft : '10px'}} > {AddItem} </span></li> */}

       { AddedValue.map((itemval, index) => {
          return ( 
           <Items
           text = {itemval} 
           key = {index} 
           id = {index} 
           onSelect = {cross}
          />
         ); 
        })}

          </ol>
      </div>
    </div>
    </>

  )


} 

export default App;