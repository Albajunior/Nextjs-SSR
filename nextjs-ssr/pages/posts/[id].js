import axios from "axios";

const TaskDetail = ({ task }) => {
  return (
    <div>
      <h1>Détails de la tâche</h1>
      <p>Titre : {task.title}</p>
      <p>Statut : {task.completed ? "Terminée" : "En cours"}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  try {
    const taskId = params.id;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${taskId}`
    );
    const task = response.data;
    return {
      props: { task },
    };
  } catch (error) {
    return { props: { tasks: [] } };
  }
}

export default TaskDetail;
