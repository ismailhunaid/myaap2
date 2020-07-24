import React from 'react';
import '../../src/App.css'

const Hoc = (Sample3) => {


    return (props) => {

        return(
            <div className="color">
                <Sample3 {...props} />

            </div>
        )

    }
}

 

 

export default Hoc;