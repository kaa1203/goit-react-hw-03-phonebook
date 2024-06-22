import PropTypes from "prop-types";
import css from "components/Filter/Filter.module.css"

function Filter({filter, filterValue}) { 
   const handleOnChange = e => {
      filterValue(e.target.value);
   }

   return (
      <input 
         type="text" 
         name="filter"
         placeholder="Search here..."
         className={css.filterInput}
         value={filter}
         onChange={handleOnChange}
      />
   );
}

export default Filter;

Filter.propTypes = {
   filter: PropTypes.string.isRequired,
   filterValue: PropTypes.func.isRequired
}