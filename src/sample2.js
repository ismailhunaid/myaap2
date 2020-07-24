import React,{ Component } from 'react';
import Sample3 from './sample3';
import Sample4 from './sample4';

class Sample2 extends Component{
    render(){
        return(
        <div>
          <h2> 
          this is sample2 component i am a parent component for Sample3 and Sample4 ,  practicing for props in different ways
              </h2>  

              <Sample3 name="ismail" age = "30" qualification = "Hafiz al Quran" />
              <Sample3 name="nafisa" age ="25"  qualification = "Hafiz al Quran" > Hobbies:reading </Sample3> 
              <Sample4 name="hamza" age ="26"  qualification = "Hafiz al Quran" > Hobbies:reading </Sample4> 
        </div>

        )
    }
}

    export default Sample2;

   
