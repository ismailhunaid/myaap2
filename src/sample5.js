import React, { Component } from 'react';

class Sample5 extends Component {
    constructor(props){
        super(props)

        this.state = {
            profile:[
                {name:'huzefa saifuddin', age:30 , qualification:'Haafiz al Quran' },
                {name:' murtaza bhinder', age:28 , qualification:'Photographer'},
                {name:' mustafa fakhruddin ',  age:35, qualification:'software developer'},

            ]
        }
    }
  
render(){

   const a = this.state.profile[0].name
   const b= this.state.profile[0].age
   const c = this.state.profile[0].qualification
   const d = this.state.profile[1].name
   const e= this.state.profile[1].age
   const f = this.state.profile[1].qualification
   const g = this.state.profile[2].name
   const h= this.state.profile[2].age
   const i = this.state.profile[2].qualification
 


    
 
    
  



   
    return(
        <div>

         <p> I am <b>  sample5 class based component using internal state 
             and not sending props any where  </b></p>

             <ul>
    <li> {a} </li>
    <li> {b} </li>
    <li> {c} </li>

    <li> {d} </li>
    <li> {e} </li>
    <li> {f} </li>

    <li> {g} </li>
    <li> {h} </li>
    <li> {i} </li>
    
    </ul>




    

            

        </div>
    )
}
    
}

export default Sample5;

