import React from 'react';

const Sample14 = (props) =>{


const {details} = props;
const details2 = details.map((list) => {
    return (
        <div key = {list.id} >
            <ol>
    
    <li> name : {list.name}     </li> 
    <li> Age: {list.age}     </li> 
    <li> qualification : {list.qualification}     </li> 
    <li> <button  onClick= {() => {deleteDetails(list.id)}} >  Delete </button></li>

            </ol>

        </div>
    )
});

const {deleteDetails} = props; 


    return(
        <div>
          <b>   this is Sample14 functional based component will receive state as props
                from Sample13 </b>

          <div>
               {details2} 
          </div>
        </div>
    )
}


export default Sample14;
