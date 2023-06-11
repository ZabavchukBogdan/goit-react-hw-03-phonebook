import React, { Component } from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactList/ContactList';
import { Filter } from './contactFilter/ContactFilter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // зчитування зі сховища
  componentDidMount() {
    const contactsData = JSON.parse(localStorage.getItem('contacts'));
    if (contactsData) {
      this.setState({ contacts: contactsData });
    }
  }

  // запис до сховища
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }




  // функція запису отриманих даних до масиву contacts
  formSubmit = data => {
    const isExist = this.state.contacts.find(contact => contact.name === data.name)
    if (isExist) {
   return alert(`${data.name} is already in contacts.`);
    } else {
        this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

 

  // функція отримання даних з поля filter
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // функція видалення контакту зі списку
  deleteContact = Id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== Id),
    });
  };


  render() {
    const { contacts, filter } = this.state;

    // умова пошуку контактів у списку за значенням веденних даних у поле filter
    const visibleContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm receiveData={this.formSubmit} />

        <h2>Contacts:</h2>
        <Filter value={filter} changeFilter={this.changeFilter} />
        {contacts.length !== 0 && (
          <ContactsList
            contacts={visibleContact}
            deleteContact={this.deleteContact}
          />
        )}
      </Container>
    );
  }
}