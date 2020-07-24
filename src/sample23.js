import React, {Component} from 'react';

import axios from 'axios';

class Sample23 extends Component {
    state = {
        users:[],
        
    }
    componentDidMount(){
        console.log("component did mount ")
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then (res => {
        this.setState({users:res.data })

console.log(res)
    })



    }

    render() {
const user1 = this.state.users.map((user) =>{
    return(
        <div key ={user.id}>
<li>{user.name}</li>
<li>{user.email}</li>

        </div>
    
    )
})
            
            
        
        return (
            <div>
            <h2> this is Sample 23 component</h2>
            {user1}
            
            </div>
        )
    }
}



export default Sample23
