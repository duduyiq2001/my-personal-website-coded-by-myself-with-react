import React, { Component } from 'react';

import sf from '../images/SF.png'
import uci from '../images/uci.png'
export default class Experiences extends Component {
    state = {}
    render() { 
        return (
        <div><div className='banner'><h1>Experiences</h1>  </div> 
        <div style={{height:"250px"}}>
            <h2 style = {{float: "left"}}> SHanghai SF Express(SDE intern)</h2>
            <h6 style = {{ position: "relative",top:"38.4px",right:"458.38px",float: "left",color:"#cccccc"}} > July-August 2021</h6>
            <div className='proj1detail'>
           

            
            <a href="https://jmtuck.itch.io/tactical-chess"><img src={sf} className = "imgclass"  alt="oops" /></a>
            <div className='description'>
                <p>
                    May sound bizarre that I interned as an SDE in SF express. well SF is also an logistics company that offers ordering process and services
                    like warehousing,shipping and etc. During my stay I worked on an API with their software development team for their order management system. The API allows obtaining
                    information about orders such as delivery method of the order and the product category. I got to write some scripts in python, to test parts of the API with Postman and learned a little
                    about SQL query and postgreSQL database.
                    </p>



            </div>
            
            </div>

        </div>
        <br>
        </br>
        <br>
        </br>
        <div style={{height:"250px"}}>
            <h2 style = {{float: "left"}}> Undergraduate/computer science major at UC irvine</h2>
            <h6 style = {{ position: "relative",top:"38.4px",right:"743.38px",float: "left",color:"#cccccc"}}> 2020 September- now</h6>
            <div className='proj1detail' style={{width:"100%",}}>
           

            
            <a href="https://jmtuck.itch.io/tactical-chess"><img src={uci} className = "imgclass"  alt="oops" /></a>
            <div className='description' style ={{height:"150px", margin:"auto"}}>
                <p>
                    I am currently a Junior. Might add another major in the future, possibly data science
                    </p>



            </div>
            
            </div>

        </div>
        
        
        
        </div>);
    }
}