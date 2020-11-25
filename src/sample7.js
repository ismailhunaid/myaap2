import React ,{ Component } from 'react';


class Sample7 extends  Component {
    

   

    render (){
const {quranicFruits} = this.props 
const quranicFruitsNew = quranicFruits.map((fruit) =>{
    return(
        <div key={fruit.id} >
            <ol>
    <li> {fruit.name}</li>
    <li> {fruit.description}</li>
    <li> {fruit.use}</li>
    <li> <img src={fruit.image} alt={fruit.name} width="50px" /> </li>
            </ol>

        </div>
    )
} )
        
        return(
            <div>
                <p> <b> this is Sample7 class based component
                     will receive state properties from Sample6 using props </b></p>

                     {quranicFruitsNew}
            </div>
        )
    }
}

export default Sample7;