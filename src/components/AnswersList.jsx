// import React from 'react'
// import {Answer} from './index'

// const AnswersList = (props) => {
//   return(
//     <div className="c-grid__answer">
//       {props.answers.map((value, index) => {
//         return <Answer content ={value.content} key={index.toString()}/>
//       })}
//     </div>
//   );
// };

// export default AnswersList

import React from 'react';
import {Answer} from './index'

const AnswersList = (props) => {
    return (
        <div className="c-grid__answer">
            {props.answers.map((key, index) => {
                return <Answer answer={props.answers[index]} key={index.toString()} />
            })}
        </div>
    );
};

export default AnswersList;