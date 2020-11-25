import React,{ Component } from 'react';

class Sample1 extends Component {
    render(){
        return React.createElement('div' ,null , React.createElement('h2',null, 'using React.createElement'));

         // this is using React.CreateElement
       
        
    }
};


export default Sample1;