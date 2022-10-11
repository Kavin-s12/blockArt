import React, { Component } from 'react';
import './Navbarmain.css';

class Navbarmain extends Component {
    render() {
        return (
            // Main navbar and light-dark modes
            <nav className="nav-main">
                    <h1 className="heading"><b>Block</b>Art</h1>

                    <div className="toggle-container">
                        <span style={{color: this.props.darkmode? "grey" :"yellow"}}>☀</span>
                        <span className="toggle">
                            <input
                            checked={this.props.darkmode}
                            onChange={this.props.toggleTheme}
                            type="checkbox"
                            className="checkbox"
                            id="checkbox"
                            />
                            <label htmlFor="checkbox"/>
                        </span>
                        <span style={{color : this.props.darkmode? "#fff":"grey"}}>☽</span>
                    </div>

            </nav>
        )
    }
}


export default Navbarmain;