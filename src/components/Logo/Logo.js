import React from 'react';
import logoImage from '../../assets/burger-logo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo} >
        <img src={logoImage} alt="Food Panda"/>
    </div>
);

export default logo;