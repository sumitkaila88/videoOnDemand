import React from 'react';
import Div from '../parent/DivComponent';
import Parent from '../parent/ParentComponent';


import './modal.scss';

const Modal = props => {
return (
  <Parent>
    {props.show && <span className = "backdrop" onClick = {props.closeClick}></span>}
    <Div className={`modal ${props.show ? "show" : "hide"}`}>
      {props.children}
      <button className="closeModal" onClick = {props.closeClick}>X</button>
    </Div>
  </Parent>
  )
}

export default Modal;