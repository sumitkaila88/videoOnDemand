import React from 'react';
// Global imports from node modules ^

import Logo from '../../presentation/logo/LogoComponent';
import Nav from '../nav/NavComponent';
import Parent from '../../base/parent/ParentComponent';

import './header.scss';


const Header = (props) => {
  return (
    // could have used the fragment component <> </> or <React.fragment> </React.fragment> but preferred using the old method of creating a Auxiallary component 
    <Parent> 
      <header className = "header">
      <Logo />
      <Nav 
        navigation = {props.navigation}
      />
      </header>
    </Parent>
  );
}

export default Header;