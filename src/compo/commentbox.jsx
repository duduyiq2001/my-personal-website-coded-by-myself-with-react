import React,{Component} from 'react';

 export default class Commentbox extends Component{
    submitcomment(){
        console.log(document.getElementById('name').value);
        console.log(document.getElementById('text').value);
        console.log(document.getElementById('acounter').getState().value)
    
    }
    render() { 
        
        return(
        <div>
        
        
        <form onSubmit={this.props.submitfunc} >
       
            <h3 style = {{color:"#cccccc"}}>Please leave a comment</h3>
            <textarea rows={4} cols={30} placeholder="Enter" id='text' >

            </textarea>
            <div className='formbuttons'>
            <input type="text" placeholder='Name' id ="name" />
            <input type= "submit"style = {{float:"right",}}/>
            </div>

        </form>
       
       
      
           
            </div>);
    }

}