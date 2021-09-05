import React, {useRef} from 'react';
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';
const ContactList = (props) =>{
    console.log(props);
    const inputE1 = useRef("");
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map( (contact)=>{
        return(
            
            <ContactCard contact={contact} clickHandler={  deleteContactHandler}/>
        );
    })
    const getSearchTerm = ()=> {
        props.searchKeyword(inputE1.current.value);
    }
    return(
        <div className="ui celled list" style={{ marginTop: '100px'}}>
            <h2>Contact List
           
                <Link to="/add">
                <button className="ui button blue right" style= {{ float: 'right'}}>+</button>
                </Link>
            </h2>
            <div className="ui search" style={{marginTop: '15px', marginBottom: '15px'}}>
                <div className="ui icon input" style={{width: '100%'}}>
                    <input type="text"  ref = {inputE1} className="prompt" placeholder="Search Contacts" value={props.term} onChange={ getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
            {renderContactList.length > 0 ? renderContactList: 'No Contacts Available' }</div>
    );

}
export default ContactList;