import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: 
    [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ""
  }

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  }

  filterValue = filter => {
    this.setState({
      filter,
    })
  }

  filterContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  componentDidMount() {
    let contactsFromLS = localStorage.getItem("contacts");

    if(contactsFromLS !== null) {
      this.setState({ contacts: JSON.parse(contactsFromLS) });
    }
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  render() {
    console.log("render")
    const { contacts, filter } = this.state;

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          addContact={this.addContact}
        /> 

        <h2>Contacts</h2>
        <Filter
          filter={filter}
          filterValue={this.filterValue}
        />
        <ContactList
          filterContact={this.filterContact}
          deleteContact={this.deleteContact}
        />

      </div>
    );
  }
}

export default App;