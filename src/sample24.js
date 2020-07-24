import React, { Component } from 'react';

class Sample24 extends Component {


    render(){
        const {teacherDetails} = this.props
        const teacheDetails2 =teacherDetails.map((data) => {
            return(
                <div key = {data.id} >
                    <ol> 
            <li> {data.name}</li>
            <li> {data.gender}</li>
            <li> {data.gender}</li>
            <li> <img src={data.image} alt={data.name} width="60px" /> </li>
                    </ol>

                </div>
            )
        })
        return(
            <div>
this is sample20  component 
            {teacheDetails2}
            </div>
        )
    }
}


    
   
            

        

    
    
        
        
        
    
 
    
   
        
        
                
            

        
           
        
    
  
    



export default Sample24;
