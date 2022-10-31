import { Divider } from 'antd';
import React from 'react';
import Footer from './footer';
import Header from './header';

interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
            <Divider/>
            {children}
            <Divider/>
            <Footer/>
        </React.Fragment>
    );
};

export default Layout;