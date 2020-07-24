import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import Navbar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import './App.css'


//App
class Sample22 extends Component {
    render(){
        return(
            <BrowserRouter>
            
            
            <div className="App-header" >
                <b> this is Sample22 main Component </b>
                    

              
                  <Navbar />
                 <Route  exact path="/"         component= {Home}  />
                 <Route  path="/about"     component= {About}  />
                 <Route  path="/contact"  component= {Contact}  />
              </div>
        
            </BrowserRouter>
        )
    }
}


export default Sample22;
