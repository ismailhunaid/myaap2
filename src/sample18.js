import React , { Component } from 'react' ;

class Sample18 extends Component {
    constructor(props){
        super(props)
this.state ={
    id:'',
    name:'',
    age:'',
    profession:''
}
         
    }

    handleChange =(event) => {
        const target = event.target;
        const name = target.name;
        const value =target.value;
this.setState({
    [name] :value
})

 }

 handleSubmit = (event) => {
    
     event.preventDefault();

     this.props.additionInData(this.state)
     //console.log(JSON.stringify(this.state));
     //alert(JSON.stringify(this.state));
 }


    render(){
        return(
            <div>
                this i sample18 class based component 
                contain a form 
                <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"> Name:</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />

                    <label htmlFor="age"> Age : </label>
                    <input type="number" name="age" id="age" value={this.state.age} onChange={this.handleChange} />

                    <label htmlFor="profession"> Profession: </label>
                    <input type="text" name="profession" id="profession" value={this.state.profession} onChange={this.handleChange}/>
<br />
<br />
                    <label htmlFor="submit"> Submit : </label>
                    <input type="submit" id="submit" value="submit" />
</form>

                </div>
                
            </div>
        )
    }
}

export default  Sample18;
