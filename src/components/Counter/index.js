// == Import npm
import PropTypes from 'prop-types';
// == Import local
import './counter.scss';

// == Composant
function Counter({ nbTasks }) {
  return (
    <p className="counter">{nbTasks} tâches en cours</p>
  );
}

Counter.propTypes = {
  nbTasks: PropTypes.number.isRequired,
};
// == Export
export default Counter;
