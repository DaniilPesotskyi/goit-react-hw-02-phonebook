import css from './App.module.css'
import ContactsForm from '../ContactsForm/ContactsForm';
import React, { Component } from "react";


class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  onHandleAddContact = (contact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))

    console.log(this.state.contacts)
  }

  render() {
    return (
      <div className={css.container}>
        <ContactsForm onSubmit={this.onHandleAddContact} />
      </div>
    );
  }
}

export default App;
