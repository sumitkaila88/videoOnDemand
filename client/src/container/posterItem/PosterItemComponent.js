import React from 'react';


import Poster from "../../presentation/poster/PosterComponent"
import PosterDetail from "../../presentation/posterDetail/PosterDetailDomponent";

const PosterItem = (props) => {
  return (
      <section className = "cardContainer">
        <Poster
          clicked = {props.clicked}
          src = {props.src}
          alt = {props.alt}
        />

        <PosterDetail 
          title = {props.alt}
          clicked = {props.btnClicked}
        />
      </section>
  );
}

export default PosterItem;