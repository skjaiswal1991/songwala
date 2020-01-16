import React, { Component } from 'react';
import Header from './view/common/header';
import Footer from './view/common/footer';
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Header/>
                {this.props.children}
                
            </React.Fragment>
         );
    }
}
 
export default Layout;