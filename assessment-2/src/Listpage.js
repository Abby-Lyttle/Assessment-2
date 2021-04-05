import React, { useState } from 'react';
import {  Container } from 'react-bootstrap';

export default function ListPage(props) {
    const [buttonClicked, setButtonClicked] = useState(0);
    
    return (
        
<>
         <Container> 
         <h1> To Do List</h1>
         <p className="task" >{props.ListData[0].task} </p>
         <p className="task" >{props.ListData[1].task} </p>
         <p className="task" >{props.ListData[2].task} </p>
         <p className="task" >{props.ListData[3].task} </p>
         </Container>
         <button className="green" onClick={() => setButtonClicked(0)}>
         O
         </button>
         
         <button className="red" onClick={() => setButtonClicked(0)}>
                X
            </button>
            <p className="done">{props.ListData[buttonClicked].complete}</p>
       
      
      
        </>
  );
}

