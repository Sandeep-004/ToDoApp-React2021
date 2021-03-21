import React from 'react';

const Items = (props) => {
    return (
        <>

        <i 
        className ="fa fa-times" aria-hidden="true"
         onClick = { () => { 
           props.onSelect(props.id);
                 }
            }
         />

        <li > {props.text} </li>
          
        </>

    );

};

export default Items;