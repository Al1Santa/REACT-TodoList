// == Import npm 
import React from 'react';

// == Import
import tasksList from 'src/data/tasks';
import Form from '../Form';
import Counter from '../Counter';
import Tasks from '../Tasks';
import './app.scss';
import { Component } from 'react';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // On veut utilisé des tâches du fichier src/data/tasks.js comme tâche initiales
      tasks: tasksList,
      inputTaskLabel: '',
    };
  }

  render() {
    const { tasks, inputTaskLabel } = this.state;
    // On calcul le nombre de tâche non réalisées
    const notDoneTasks = tasks.filter((item) => item.done === false);
    const nbTasksNotDone = notDoneTasks.length;

    return (
      <div className="app">
        <Form inputTaskLabel={inputTaskLabel} />
        <Counter nbTasks={nbTasksNotDone} />
        <Tasks tasks={tasks} />
      </div>
    );
  }
}
// function App() {
//   // On calcul le nombre de tâche non réalisées
//   const notDoneTasks = tasksList.filter((item) => item.done === false);
//   const nbTasksNotDone = notDoneTasks.length;

//   return (
//     <div className="app">
//       <Form />
//       <Counter nbTasks={nbTasksNotDone} />
//       <Tasks tasks={tasksList} />
//     </div>
//   );
// }

// == Export
export default App;

//  episode 7 video 2 dynamisation
