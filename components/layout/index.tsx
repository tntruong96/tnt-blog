import { Divider } from 'antd';
import React, { Fragment } from 'react';
import Footer from './footer';
import Header from './header';


const Layout: React.FC = ({children}) => {
    return (
        <Fragment>
            <Header/>
            <Divider/>
            {children}
            <Divider/>
            <Footer/>
        </Fragment>
    );
};

export default Layout;