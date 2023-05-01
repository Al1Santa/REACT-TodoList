// == Import npm
import './form.scss';

// == Composant
function Form() {
  return (
    <form className="form">
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
      />
    </form>
  );
}

// == Export
export default Form;
