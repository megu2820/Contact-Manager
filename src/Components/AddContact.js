import React from 'react'
class AddContact extends React.Component{
    state = {
        name:"",
        phone:""
    }
    add = (e) => {
        e.preventDefault();
        if(this.state.name ==="" && this.state.phone===""){
            alert("All Fields are mandatory!!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name:"", phone:""}); //To clear the fields once the user presses save
        this.props.history.push("/"); // to be redirected to home page once the new contact is added
        
    }
    render(){
        return(
            <div className="ui main" style={ {paddingTop: '100px'}}>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} placeholder="Please Enter Name" onChange={ (e)=> this.setState({name:e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Phone no.</label>
                        <input type="text"  value ={ this.state.phone} name="phone" placeholder="Please Enter Phone Number" onChange={ (e)=> this.setState({phone: e.target.value})}></input>
                    </div>
                    <button className="ui button blue">Save</button>
                </form>
            </div>
        );
    }
}
export default AddContact;