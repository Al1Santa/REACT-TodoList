// == Import npm
import React from 'react';

// == Import
import tasksList from 'src/data/tasks';
import Form from '../Form';
import Counter from '../Counter';
import Tasks from '../Tasks';
import './app.scss';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);
    // on oublie pas de binder le contexte ( représenter par this ) pour qu'il soit utilisable
    // dans un autre context
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleForSubmit = this.handleForSubmit.bind(this);
    this.state = {
      // On veut utilisé des tâches du fichier src/data/tasks.js comme tâche initiales
      tasks: tasksList,
      inputTaskLabel: '',
    };
  }

  // le seul rôle est de modifier une info dasn le state
  handleInputChange(newValue) {
    this.setState({
      inputTaskLabel: newValue,
    });
  }

  // fonction dont le rôle est d'ajouter une tâche dans le tableau du state
  handleForSubmit() {
    const { inputTaskLabel, tasks } = this.state
    // on crée un tableau contenant les ids de toutes no tâches
    const idsTasks = tasks.map((item) => item.id);
    // maintenant je veux l'id le plus haut, Math.max accepte un nombre indéfini d'argument
    const idMax = Math.max(...idsTasks);
    // maintenant je veux l'incrémenter
    const newId = idMax + 1;

    // construire la nouvelle tache
    const newTask = {
      id: newId,
      done: false,
      label: inputTaskLabel,
    };

    // Ajouter la tâche au state
    // crée une copie du tableau
    const tasksCopy = [...tasks];

    // modifier la copie du tableau en ajoutant la nouvelle tâche
    tasksCopy.push(newTask);

    // on envoie au nouveau state la copie du tableau qui contient la nouvelle tâche
    this.setState({
      tasks: tasksCopy,
    });

    // comme ça, react mettra à jour correctement l'UI lors de sa phase de reconscilliation
  }

  render() {
    const { tasks, inputTaskLabel } = this.state;
    // On calcul le nombre de tâche non réalisées
    const notDoneTasks = tasks.filter((item) => item.done === false);
    const nbTasksNotDone = notDoneTasks.length;

    return (
      <div className="app">
        <Form
          inputTaskLabel={inputTaskLabel}
          setValue={this.handleInputChange}
          addTask={this.handleForSubmit}
        />
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
