import css from './App.module.css'
import React, { Component } from "react";
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';


class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  onSetFilter = (query) => {
    this.setState({filter: query})
  }

  onHandleAddContact = (contact) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
  }

  onHandleDelContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== contactId)
    }))
  }

  render() {
    return (
      <div className={css.container}>
        <ContactsForm onSubmit={this.onHandleAddContact} />
        <ContactsList contacts={this.state.contacts} onDelete={this.onHandleDelContact} filter={this.state.filter}>
          <ContactsFilter onFilter={this.onSetFilter} />
        </ContactsList>
      </div>
    );
  }
}

export default App;
