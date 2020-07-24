import React , { Component} from 'react';

class Sample10 extends Component{

    


    render(){

        const {quranicFruits} = this.props;
        const  quranciFruitsNew = quranicFruits.map((list) => {
            return(
                <div key={list.id}>
                    <ol>
            <li> {list.name}</li>
            <li> {list.description}</li>
            <li> {list.use}</li>
            <li> <img src={list.image} alt={list.name}  width ="80px" /></li>
                        
                    </ol>

                </div>
            )
        })
        return(
            <div>
                <p> <b>
                    This is Sample10  class based component 
                    will receive props from Sample9</b></p>

                    <b>
                        {quranciFruitsNew}
                    </b>

            </div>
        )
    }
}

export default Sample10;