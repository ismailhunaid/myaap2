import React, { Component } from 'react';


class Sample12 extends Component{
  
    render(){
        const {details} = this.props;
        const details2 = details.map((list) => {
            return(
                <div key ={list.id} >
        <div onClick={this.props.click} > name : {list.name}   Age :  {list.age}   qualification : {list.qualification}    </div>
           
       
                </div>
            )
        })

        return(
            <div>

                <div>   <b> this is Sample12
                     class based component 
                     will receive props from Sample11   </b>  </div> 
               
                

                 <div> {details2}  </div>  
            </div>
        )
    }
}

export default Sample12;