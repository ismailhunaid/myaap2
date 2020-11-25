import React , { Component } from 'react';
import Sample12 from './sample12';

class Sample11 extends Component {
    constructor(props) {
        super(props)

this.state = {
    details :[
        {id:0, name:'ismail', age:30, qualification:'Haafiz'},
        {id:1, name:'abezer', age:35, qualification:'softwaredeveloper'},
        {id:2, name:'adnan',  age:29, qualification:'Haafiz'}
    ]
} 
    

    };

    switchNameHandler = ( ) => {
       //alert('was clicked')

        this.setState({
            details:[
                {id:0,  name:'Hamzapawan',  age:26,  qualification:'Haafiz'},
                {id:1,  name:'abezer',      age:35,  qualification:'softwaredeveloper'},
                {id:2,  name:'abdulqadir',  age:29,  qualification:'Haafiz'}
              
            ]
        })
    }


    

    render(){
        return(
            <div>
                <div>
                    <i>this is Sample11 class based component
                         contain internal state  doing practicing for 
                         manipulation state using events and methods 
                         and mainly we can pass methods as props also to child component
                        
                         </i>
                        

            </div>
                <div>
                    <button onClick={this.switchNameHandler}> Switch name </button>
                </div>
               
                     <Sample12 details={this.state.details} click={this.switchNameHandler} /> 
               
            </div>
        )
    }
}

export default Sample11;
