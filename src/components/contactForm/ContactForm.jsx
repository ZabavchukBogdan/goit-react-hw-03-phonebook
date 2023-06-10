import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';

import {
    FormWrapper,
    ButtonAdd,
    TitleInput,
    InputField,
} from './ContactForm.styled';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    // функція отримання даних з полів введення
    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    // функція відправки даних
    handleSubmit = event => {
        event.preventDefault();
        const id = { id: nanoid(3) };
        this.props.receiveData({ ...id, ...this.state });
        this.reset();
    };

    // функція очищення значень форми
    reset = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <FormWrapper onSubmit={this.handleSubmit}>
                <TitleInput>
                    Name
                    <InputField
                        type="text"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.handleChange}
                    />
                </TitleInput>

                <TitleInput>
                    Number
                    <InputField
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.handleChange}
                    />
                </TitleInput>
                <ButtonAdd type="submit">Add contact</ButtonAdd>
            </FormWrapper>
        );
    }
}

ContactForm.propTypes = {
    receiveData: PropTypes.func.isRequired,
};