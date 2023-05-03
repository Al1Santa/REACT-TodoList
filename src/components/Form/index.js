// == Import npm
import PropTypes from 'prop-types';
// == Import local
import './form.scss';

// == Composant
function Form({ inputTaskLabel, setValue }) {
  return (
    <form className="form">
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={inputTaskLabel}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </form>
  );
}
// episoe 7 numero 3 14 minutes
Form.propTypes = {
  inputTaskLabel: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
// == Export
export default Form;
