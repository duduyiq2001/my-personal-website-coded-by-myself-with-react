import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Dropd from './dropdown.jsx'
export default class Navbar extends Component {
    state = {}
    render() { 
        return (
<nav className='navbar'>
            <div className = "navcenter">
                <ul className='navlinks'>
                    <li className='navitem'>
                        <Link to = "/"> home</Link>
                    </li>
                    
                    <li className='navitem'>
                        <Link to = "/myprojects"> projects</Link>
                    </li>
                    
                    <li className='navitem'>
                        <Link to = "/Experiences"> Experiences</Link>
                    </li>
                    <li class Name = 'navitem'>
                        <h1>  &nbsp; &nbsp; &nbsp; &nbsp;    </h1>
                    </li>
                </ul>

            </div>
        </nav> 



        );
    }
}