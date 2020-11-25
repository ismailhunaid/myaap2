import React, { Component } from 'react';


class Contact extends Component {

    constructor(props){
        super(props)
        console.log(props)
        setTimeout(()=>{
            props.history.push('/about')
        },2000);
    }
    render(){
        return(
            <div>
                <b> THIS IS OUR CONTACT COMPONENT
                    </b>
            </div>
        )
    }
}


export default Contact;
