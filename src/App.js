import React,{ useState,useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header.js';
import {uuid} from 'uuidv4'; // to have a unique id for each contact to faciliate delete operation
import AddContact from './Components/AddContact.js';
import './App.css';
import ContactList from './Components/ContactList.js';
import ContactDetails from './Components/ContactDetails.js';
function App() {
  const LOCAL_STORAGE_KEY ="Contacts";
  const[Contacts, setContacts] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...Contacts,{id: uuid(),...contact}]);
  }
  const removeContactHandler = (id) => {
    const newContactList = Contacts.filter((contact)=>{
      return contact.id !== id 
    });
    setContacts(newContactList);
  };
  const searchHandler = (searchTerm) => {
    
    setsearchTerm(searchTerm);
    if (searchTerm !== ""){
      const newContactList = Contacts.filter((contact) =>{
       return Object.values(contact)
       .join("").toLowerCase().
       includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }
    else{ setSearchResults(Contacts);}
  }

  useEffect( ()=> {
    const rettriveContacts = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY));
    if(rettriveContacts)setContacts(rettriveContacts);
  }, []);

  useEffect( ()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(Contacts));
  }, [Contacts]);
  return (<div className="app" >
    <Router>
    <Header/>
    <Switch>
    < Route path ="/" exact render= { (props)=><ContactList {...props}   searchKeyword = {searchHandler} term ={searchTerm} contacts={searchTerm.length<1?Contacts: searchResults} getContactId = { removeContactHandler}/>}/>
     < Route path ="/add"  render= { (props)=>  <AddContact {...props} addContactHandler={addContactHandler}/>}/>
     <Route path="/contact/:id" component={ContactDetails}/>
    </Switch>
   
    
  
    </Router>
  
  </div>);
}

export default App;
