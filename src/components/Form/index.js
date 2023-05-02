// == Import npm
import PropTypes from 'prop-types';
// == Import local
import './form.scss';

// == Composant
function Form({ inputTaskLabel }) {
  return (
    <form className="form">
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={inputTaskLabel}
      />
    </form>
  );
}

Form.propTypes = {
  inputTaskLabel: PropTypes.string.isRequired,
};
// == Export
export default Form;
