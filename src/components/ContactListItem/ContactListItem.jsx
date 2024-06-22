import PropTypes from "prop-types";
import css from "components/ContactListItem/ContactListItem.module.css"

function ContactListItem({ filteredContact, deleteContact }) {

   const handleClick = () => {
      deleteContact(filteredContact.id);
   }
   return (
      <li className={css.listItem}>
         <p>{filteredContact.name}</p>
         <p>{filteredContact.number}</p>
         <button className={css.listButton} onClick={handleClick}>Delete</button>
      </li>
   );
}

export default ContactListItem;

ContactListItem.propTypes = {
   filteredContact: PropTypes.object.isRequired,
   deleteContact: PropTypes.func.isRequired
}