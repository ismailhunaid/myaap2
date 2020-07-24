import React, { Component } from 'react';
import {Link ,NavLink,withRouter} from 'react-router-dom';
import '../App.css'




class Navbar extends Component {
    constructor(props){
        super(props)
        console.log(props)
        setTimeout(()=>{
            props.history.push('/about')
        },3000)
    }
    render(){
        return(
            <div className="Nav">
                <nav>
                    <ul>
                        <li className="Nav2">  <Link to="/"> Home </Link>  </li>
                        <li className="Nav2"> <NavLink to="/about"> About </NavLink>  </li>
                        <li className="Nav2"> <Link to="/contact"> Contact </Link>  </li>
                    </ul>
                </nav>
                    
            </div>
        )
    }
}


export default withRouter(Navbar);
