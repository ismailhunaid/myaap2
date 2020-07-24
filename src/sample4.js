import React from 'react';

const Sample4 = (props) =>{
    return(
        <div>
            <p> this is Sample4 Functional based component 
                can receive props from parent component 
                curently parent component is <b> Sample2</b>

            </p>
            <p> <b> my name is : {props.name} <br />
            my age is : {props.age} <br />
            my qualification is : {props.qualification} <br />
            {props.children}
                </b></p>
        </div>
    )
}

export default Sample4;