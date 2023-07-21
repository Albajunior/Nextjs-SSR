import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import axios from 'axios';


// export default function Home() {
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>[Your Self Introduction]</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this in{' '}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//     </Layout>
//   )
// }


const Tasks = ({ tasks }) => {
  return (
    <div>
      <h1>Liste des tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} 
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