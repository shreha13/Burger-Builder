import React, { Fragment } from 'react';

import classes from './Layout.module.css'

const Layout = props => (
    <Fragment>
        <div>Toolbar,sidebar,backdrop</div>
        <main className={classes.content}>{props.children}</main>
    </Fragment>
)

export default Layout;