import React, { Component } from 'react';
import './Navbar.css';
import Burger from './Burger';
import Rightnav from './Rightnav';

class Navbar extends Component {
    state = {
        clicked : false,
        open: false
     }
     
      handleClick = ()=>{
         this.setState({clicked: !this.state.clicked})
     }


     setOpen = () =>{
        this.setState({open: !this.state.open})
     }

    render() {
        return (
            <nav className={this.props.darkmode ? "navbar darkmode": "navbar lightmode"}>
                
                <span className="navbar-logo"><i className="fab fa-react" /></span>
                
               <Burger open={this.state.open} setOpen={this.setOpen.bind()}/>
               <Rightnav open={this.state.open}/>
                
                <button className="btn">Login</button>
                
                
                
                <button className="button-search" onClick={this.handleClick}><i className="fa fa-search"/></button>
                <form className={this.state.clicked ? "search-box active": "search-box"}>
                    <input 
                    type="text"
                    placeholder=" search..."
                    className="search-input"
                    required/>
                </form>
             
            </nav>
        )
    }
}

export default Navbar;