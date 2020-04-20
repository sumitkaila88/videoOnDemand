import React from 'react';
import Parent from '../../base/parent/ParentComponent';


import './videoDetailComponent.scss'

const VideoDetails = props => {
  const categories =  props.details.categories.map(category => {
    return ` ${category.title}`
  }).join();
  return (
    <Parent>
      <h2>{props.details.title}</h2>
      <h4>{props.details.description}</h4>
      <section className ="container">
        <span><strong>Rating:</strong>{props.details.parentalRatings[0].scheme}</span>
        <span><strong>Categories:</strong>{categories}</span>
      </section>
    </Parent>
  )
}

export default VideoDetails;