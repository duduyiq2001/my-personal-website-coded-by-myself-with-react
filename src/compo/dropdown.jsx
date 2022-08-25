import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
function Dropd() {
    return (
      <Dropdown style={{position:"absolute",top:"8px",right:"12px",width:"76.97px"}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Others
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href = "/hobbies">hobbies</Dropdown.Item>
          <Dropdown.Item href="/musictastes">music tastes</Dropdown.Item>
         
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  
  export default Dropd;