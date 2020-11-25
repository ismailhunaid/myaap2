import React ,{Component } from 'react' ;
import Sample10 from './sample10'
import { FRUITS } from './shared/shared';

class Sample9 extends Component {

    constructor(props){
super(props)

this.state = {
quranicFruits : FRUITS
}


    };




    render (){
        return(
            <div>
                <p>
                    <b> this is Sampple-9 class based component  
                        we can also keep our component 
                        state seperated  and then pass date to the child component  
                        this is to avoid mess in our Root component 
                    </b>
                </p>
                <Sample10  quranicFruits={this.state.quranicFruits}/>
            </div>
        )
    }
}

export default Sample9 ;
