import Head from 'next/head'
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import IconButton from '../components/iconButton';
import TasksContainer from '../components/tasksContainer';
import Styles from '../styles/dashboard.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Workflow | Zaan Corp</title>
      </Head>
      <main>
        <div className={Styles.dashboardContainer}>
          <Sidebar />
          <div className={Styles.contentContainer}>
            <Navbar />
            <TasksContainer />
            <div className={Styles.buttonsContainer}>
              <IconButton styles={Styles.tasksButton} src='./icons/checklist-white.svg' alt="menu" width="22" height="22" />
              <IconButton styles={Styles.listButton} src='./icons/list-white.svg' alt="menu" width="22" height="22" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
