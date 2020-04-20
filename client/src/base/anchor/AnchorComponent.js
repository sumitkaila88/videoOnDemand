// created a base folder for all atomic/molecular level components

import React from 'react';


import Parent from '../parent/ParentComponent';

const Anchor = (props) => {

  let link;
  if (props.isContainer) {
    link = (<a
      href="javascript:void(0);"
      className = {props.className || ''}
      onClick = {props.onClick || null} >
        {props.children}
    </a>);
  }
  else {
    link = (
      <a 
        href = {props.href}
        className = {props.className || ''}
        target = {props.target || '_self'}
        onClick = {props.click || null}
      >
        {props.lable}
      </a>
    );
  }
  return (
    <Parent>
      {link}
    </Parent>
  );
}


export default Anchor;