import React, { Component } from 'react';
import Sample17 from './sample17'
import Sample18 from './sample18'

class Sample16 extends Component {

    constructor (props) {
        super(props)

this.state ={
    data:[
        {name:'ismail', age:30, profession:'khidmat',id:10},
        {name:'nafisa', age:25, profession:'houseperson',id:20}
    ]
}

    };

    additionInData = (received) => {
        received.id=Math.random()*10
        let data2 = [...this.state.data, received]
        this.setState({
            data:data2
        
        })

    }

    deletionInData = (id) => {
         console.log(id)
         let array = this.state.data.filter ((value) => {
             return value.id !== id

         });
         
         
         this.setState({
             data:array
         })
    }

    render(){
        return(
            <div>
                this is Sample16 class based component and a parent component for Sample17 and sample18 
                contain internal state the aim for this is to update internal state by entring in the form input tag

<div>
    <br />
    <Sample17  data={this.state.data} deletionInData={this.deletionInData} />
    <Sample18 additionInData={this.additionInData} />
    
</div>
            </div>


        )
    }
};


export default Sample16
 