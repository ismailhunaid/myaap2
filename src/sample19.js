import React, { Component } from 'react';
import Sample20 from './sample20';
//import Sample21 from './sample21';

class Sample19 extends Component {

constructor(props){
    super(props)
    this.state = {
        teacherDetails: [
            {
                id:1,
                name:'Ismail Hunaid',
                age : 30,
                gender:'male',
                image:'assets/icons/male.png'

            },
            {
                id:2,
            name:'Hamza Hussain',
            age : 25,
            gender:'male',
            image:'assets/icons/male.png'

            },
            {
                id:3,
            name:'Nafisa M Ismail Bhai',
            age : 25,
            gender:'female',
            image:'assets/icons/women.png'

            },
        ],
        
        showDetails:false,
    }
 

};

toggleNameHandler = () => {
    console.log('clicked')
    const show = this.state.showDetails;
    this.setState({
showDetails:!show

    })
}

render(){
    let abc = null;

    if (this.state.showDetails === true) {
abc = (

    <div>
        <Sample20 teacherDetails= {this.state.teacherDetails} /> 

    </div>
);

    };

         



    

    

    return(
        <div>
            this is Sample19 

<div>
    <br />
    <button onClick={this.toggleNameHandler}> TOGGLE NAME</button>
   
   {abc}
</div>
        </div>
    )
};



    
    


        
         
    
        
        
         
    

      


           
   


    




}

 


               

        
    
        
            
    
        
            
                    

               
            
        
      

           
            
            
           
            
           
              
           

            

            


export default  Sample19;
