import Link from "next/link";
import axios from "axios";

const Tasks = ({ tasks }) => {
  return (
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/posts/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const tasks = response.data;
    return {
      props: { tasks },
    };
  } catch (error) {
    return { props: { tasks: [] } };
  }
}
export default Tasks;
