import React , { Component }  from 'react' ;
import Sample14 from './sample14'
import Sample15 from './sample15'

class Sample13 extends Component {
    constructor (props){
        super(props)

this.state = {
    details : [
        { name:'ismail',age:30 ,qualification:'Haaffiz',id:1},
        {  name:'abezerbhai', age:35, qualification:'software developer', id:2}
    ]
}

    };


addDetails = (input) => {
input.id = Math.random() *5
console.log(input.id);
console.log(input)
let detailsAdded = [...this.state.details , input]
//let details = [...this.state.detals ,input]
this.setState ({
   details:detailsAdded
})

}
deleteDetails = (id) => {
console.log (id)

let abc = this.state.details.filter ((xyz) => {
return xyz.id !==id

}) ;
    

this.setState({
    details:abc
})


}


    render(){
        return(
            <div>
                this is Sample13 class based component 
                practice for adding and update

                <b>
                    <Sample14  details={this.state.details} deleteDetails={this.deleteDetails} />
                    <br />

                    <Sample15 input={this.addDetails} />

                </b>
            </div>
        )
    }
};

export default Sample13;
