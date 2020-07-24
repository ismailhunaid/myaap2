import React from 'react';

const Sample8 = (props) => {

    const {quranicFruits} = props;
    const newQuranicFruits = quranicFruits.map((list) => {
        return (
            <div key={list.id}>
                <ul>
        <li> {list.name} </li>
        <li> {list.description} </li>
        <li> {list.use} </li>
        <li> <img src={list.image} alt ={list.name} width="60px" /> </li>
                </ul>

            </div>
        )
    })

    return(
        <div>
            <p>
                <b> this is Sample8 functional based component will receive props from Sample6</b>
            </p>
            {newQuranicFruits}
        </div>
    )
};

export default Sample8;


