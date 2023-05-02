// == Import: npm
import PropTypes from 'prop-types';

// == Import: local
import './tasks.scss';

// == Composant
function Tasks({ tasks }) {
  return (
    <ul className="list">

      {tasks.map((item) => {
        // On construit la classe css du labelk de l'item courant en fonction de l'état
        // de la tâche (done à true ou false)
        let cssClass = 'list-item';
        if (item.done) {
          cssClass += ' list-item--done';
        }
        // On construit l'id de l'input pour l'item courant en se basant
        // sur la propriété id de l'item courant
        // On fait attention à préfixer l'id
        // on évite ainsi des conflits d'id
        const idItem = `task-${item.id}`;
        return (
          <li key={idItem}>
            <label htmlFor={idItem} className={cssClass}>
              <input id={idItem} type="checkbox" checked={item.done} />
              {item.label}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

Tasks.propTypes= {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
}
// == Export
export default Tasks;
