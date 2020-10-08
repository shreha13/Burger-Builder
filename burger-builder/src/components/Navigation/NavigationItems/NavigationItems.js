import classes from './NavigationItems.module.css';
import React from 'react'; 
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Burger Builder</NavigationItem>
        <NavigationItem link='/'>Orders</NavigationItem>
    </ul>
)

export default NavigationItems