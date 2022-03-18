import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Header.js';

const Layout = (props) => {
    
    return (
        <Container>
            <Header/>
            {props.children}
        </Container>
    )
}

export default Layout;