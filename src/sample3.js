import React,{ Component } from 'react';
import Hoc from '../src/Hoc/higherorder';

class Sample3 extends Component{
    render(){
        const n = this.props.name;
        const a = this.props.age;
        const q = this.props.qualification;

       const { name ,age, qualification} = this.props;
        return(
            <div>
                <p> this is sample 3 class based component
                    and  can receive props from parent component
                     currently parent component is Sample2 </p>

                     <p>my name is : {this.props.name} <br />
                        my age is  : {this.props.age} <br />
                        my qualification is: {this.props.qualification} <br />
                        {this.props.children} </p>
                         
                        <p> my name is : {n} <br />
                        my age is  : {a} <br />
                        my qualification is: {q} <br />
                     
                      </p>

                      <p> <b> using destructuring  <br />
                      my name is :{name} <br />
                      my age is : {age} <br />
                      my qualificaton is : {qualification}
                      </b>
                          
                           </p>
                                 </div>
        )
    }
}

export default Hoc(Sample3);
