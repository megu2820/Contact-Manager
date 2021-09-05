import React from "react";
import user from '../Images/user.png';
import {Link} from 'react-router-dom'
const ContactCard = (props) => {
    const {id, name, phone} = props.contact;
    console.log(user);
    

 return(
    <div className="item">
     <img className="ui avatar image" src={ user} alt="user"/>
    <div className="content">
        <Link to={{ pathname:`/contact/${id}`,state:{contact:props.contact}}}>
      <div className="header">{name}</div>
      <div>
          {phone}
         
      </div>
      </Link>
      
    </div>
    <i className="trash alternate outline icon" style={{ float: 'right', color: 'red'}}  onClick= {()=>props.clickHandler(id)}></i>
</div>

 );
}
export default ContactCard;