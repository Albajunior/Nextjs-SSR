// pages/tasks.js
import axios from 'axios';

const Tasks = ({ tasks }) => {
  return (
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.completed ? 'Terminée' : 'En cours'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  const tasks = response.data;
  return {
    props: { tasks },
  };
}

export default Tasks;
