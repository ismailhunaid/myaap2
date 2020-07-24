import React, { Component } from 'react';


class Sample17 extends Component {
  

    render() {
const {deletionInData} = this.props
        const {data} = this.props;
        const data2 = data.map((list) => {
            return(
                <div key={list.id}>
                    <ol> <b>
                    <li> name : {list.name} Age : {list.age} Profession :
            {list.profession} <button onClick={() => {deletionInData(list.id)}} > DELETE </button> </li>
                   
                    </b>
        
                    </ol>

                </div>
            )
        })
        return(
            <div>
                this is sample 17 class based component will receive props from Sample16
               {data2}
               

               <br />

             

            </div>
        )
    }
}

export default  Sample17