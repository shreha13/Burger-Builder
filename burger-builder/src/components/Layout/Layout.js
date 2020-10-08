import React, { Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css'

const Layout = props => (
    <Fragment>
        <Toolbar />
        <main className={classes.content}>{props.children}</main>
    </Fragment>
)

export default Layout;