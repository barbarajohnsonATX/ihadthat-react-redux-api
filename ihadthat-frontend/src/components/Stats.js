import React from 'react';
 
import {Icon } from 'semantic-ui-react';


const Stats = (props) => {
    
 
let items = props.topThree.map(i => {
    return <div>{i.name} </div>
})

      return (
        <div>
            <p><Icon name='blue gamepad' /><strong>Total toys</strong><div>{props.numToys} </div></p>
            <Icon name='red hotjar' /><strong>Top toys</strong>
            {items}

        </div>
      );
    }
    

  
   export default Stats

 


 