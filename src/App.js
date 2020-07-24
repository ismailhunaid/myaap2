import React, { Component} from 'react';
import Sample1 from './sample1'
import Sample2 from './sample2'
import Sample5 from './sample5';
import Sample6 from './sample6';
import Sample9 from './sample9';
import Sample11 from './sample11';
import Sample13 from './sample13';
import Sample16 from './sample16';
import Sample19  from './sample19';
import Sample22 from './sample22';
import Sample23 from './sample23';
//import Sample15 from './sample15';




import './App.css';

class App extends Component {
  render(){
    return  (
      <div>
<h1> this is a root component </h1>
<Sample1 />
<Sample2 />
<Sample5 />
<Sample6 />
<Sample9 />
<Sample11 />
<Sample13 /> 
<div>
<br />
<br />

<Sample16 />

<Sample19 />
</div>
<div>
  <Sample22 />
  <Sample23 />
  
</div>




    


      </div>
    )
  }
}

export default App;
