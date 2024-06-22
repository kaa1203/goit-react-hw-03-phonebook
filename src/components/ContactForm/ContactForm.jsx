import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import css from "components/ContactForm/ContactForm.module.css"

class ContactForm extends Component {
   static propTypes = {
      contacts: PropTypes.arrayOf(
         PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
         })
      ),
      addContact: PropTypes.func.isRequired
   }

   state = {
      name: "",
      number: "",
   }

   handleNameOnChange = e => {
      this.setState({
         name: e.target.value,
      });
   }

   handleNumberOnChange = e => {
      this.setState({
         number: e.target.value,
      });
   }

   handleOnSubmit = e => {
      e.preventDefault();
      const { name, number } = this.state;
      const { contacts, addContact} = this.props;

      if (name.trim() === "" || number.trim() === "") return;

      const contactExist = contacts.find( contact => contact.name === name);

      if (contactExist) return alert(`${name} already exists!`);

      addContact(
         {
            id: nanoid(),
            name: name.trim(),
            number: number.trim(),
         }
      );
      
      this.setState({
         name: "",
         number: ""
      });
   }

   render() {
      const { name, number } = this.state;

      return (
         <form onSubmit={this.handleOnSubmit}>
            <>
               <label className={css.formLabel}>
                  Full Name
                  <input 
                     type="text"
                     name="name"
                     className={css.formInput}
                     placeholder="Full Name"
                     pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                     value={name}
                     onChange={this.handleNameOnChange}
                     required
                  />
               </label>
            </>
            
            <>
               <label className={css.formLabel}>
                  Number
                  <input 
                     type="tel"
                     name="number"
                     className={css.formInput}
                     placeholder="Contact Number"
                     pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     value={number}
                     onChange={this.handleNumberOnChange}
                     required
                  />
               </label>
            </>
            <button className={css.formButton} type="submit">Add Contact</button>
         </form>
      );
   }
}

export default ContactForm;