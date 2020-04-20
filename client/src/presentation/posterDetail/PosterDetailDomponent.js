import React from 'react';


import Div from '../../base/parent/DivComponent';

import './posterDetailComponent.scss'


const PosterDetail = (props) => {
  return (
    <Div className = "detailSection">
      <p className="videoTitle">{props.title}</p>
      <button onClick = {props.clicked} className = "detailBtn">View Detail</button>
    </Div>
  );
}

export default PosterDetail;