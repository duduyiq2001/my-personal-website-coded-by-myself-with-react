import React, { Component } from 'react';
import Social from '../compo/socialmedias';
import profile from '../images/profile.jpg'
export default class Home extends Component {
    state = {}
    render() { 
        return (<div><div className='banner'> 
        <h1>Home</h1>
        <br/>
        <Social />
        </div>
        <div className='propic'>
            <img src={profile} alt="oops" />
        </div>
        <div className = "intro">
            <h2> About me</h2>
            </div>
            <p >
            
            Hi!My name is yiqun and I am a second year computer science student at university of california irvine! 
            I am interested in web-development but I am just starting to learn more about it! I hope eventaully I will equip the skillset of a full-stack developer! 
            </p>
           
        </div>
       

       
       
        );
    }
}