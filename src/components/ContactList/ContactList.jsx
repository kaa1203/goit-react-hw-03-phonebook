import ContactListItem from "components/ContactListItem/ContactListItem";
import PropTypes from "prop-types";

function ContactList({ filterContact, deleteContact }) {
   const filteredContacts = filterContact();
   return (
      <ul>
         {
            filteredContacts.map((filteredContact) => (
               <ContactListItem
                  key={filteredContact.id}
                  filteredContact={filteredContact}
                  deleteContact={deleteContact}
               />
            ))
         }
      </ul>
   );
}

export default ContactList;

ContactList.propTypes = {
   filterContact: PropTypes.func.isRequired,
   deleteContact: PropTypes.func.isRequired
}