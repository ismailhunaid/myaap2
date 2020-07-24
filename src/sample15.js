import React , { Component } from 'react';

class Sample15 extends Component {

    constructor (props) {
super (props) 

this.state = {
    name :'',
    age:'',
    qualification:'',
   
}
 




    };


    handleChange = (event) => {
        const target = event.target
        const name = target.name;
        const value = target.value;
        this.setState({
            [name] :value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
      // console.log(JSON.stringify(this.state));

       this.props.input(this.state)

    };



    render(){
        return(
            <div>
                <i>  this is Sample15  class based Component 
                    contain a form with events and events handler method to add date 
                     when it is submitted to the state , 
                     we type in the input field and the state will be updated n the dom not in the console
                     </i>
                     <br />
                     <br />
                     <br />

                     <div>
                         <form onSubmit={this.handleSubmit} >
                             <label htmlFor="name" > Name: </label>
                             <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                             <label htmlFor="age" > Age: </label>
                             <input type="number" name="age" id="age" value={this.state.age} onChange={this.handleChange} />
                             <label htmlFor="qualification" > Qualification: </label>
                             <input type="text" name="qualification" id="qualifiation" value={this.state.qualification} onChange={this.handleChange} />
                             <label htmlFor="submit" > Submit: </label>
                          <input type="submit" id="submit" value="submit" />
                         </form>
                     </div>
            </div>
        )
    }
}

export default Sample15;
