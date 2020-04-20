import React from 'react';


import Anchor from "../../base/anchor/AnchorComponent";
import Image from "../../base/image/ImageComponent";

import './posterComponent.scss';

const Poster = (props) => {
  return (
    <Anchor 
      onClick = {props.clicked}
      className = "card"
      isContainer = "true"
      >
      <Image 
        src = {props.src}
        alt = {props.alt}
        />
    </Anchor>
  );
}

export default Poster;