// == Import
import taskList from 'src/data/tasks';
import Form from '../Form';
import Counter from '../Counter';
import Tasks from '../Tasks';
import './app.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Form />
      <Counter />
      <Tasks tasks={taskList} />
    </div>
  );
}

// == Export
export default App;

//  episode 7 video 2 dynamisation
