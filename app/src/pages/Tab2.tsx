import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useState } from 'react';
import axios from 'axios';
import styles from './Tab2.module.css';
import Yarn from '../components/Yarn';
import Tool from '../components/Tool';
import Gauge from '../components/Gauge';
import Date from '../components/Date';


const Tab2: React.FC = () => {

  const [project, setProject] = useState({
    name: '',
    needle_size: 0,
    gauge: 0,
    user_id: 0,
    date_started: '',
    date_finished: ''
  });

  const [yarn, setYarn] = useState({
    yarn_name: '',
    weight: 0,
    yardage: 0,
    color: '',
    project_id: 0
  });

  const handleAddProject = async (e: any) => {
    e.preventDefault();
    let res = await axios.post('http://localhost:3001/project', {
      project, yarn
    })
    console.log(res);
    console.log(project)
    console.log("yarn info")
  }

  const handleProjectChange = (e: any) => {
    e.preventDefault();
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  }

  const handleYarnChange = (e: any) => {
    e.preventDefault();
    setYarn({
      ...yarn,
      [e.target.name]: e.target.value
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add a Project</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add a Project</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className={styles.addProject}>
          <IonGrid>
            <IonRow>
              <IonCol size="auto">
                <IonLabel>Project Name: </IonLabel>
              </IonCol>
              <IonCol>
                <IonInput type="text" name="name" value={project.name} onIonChange={handleProjectChange}></IonInput>
              </IonCol>
            </IonRow>
          </IonGrid>
          <Tool needle_size={project.needle_size} onIonChange={handleProjectChange} />
          <Yarn yarn_name={yarn.yarn_name} weight={yarn.weight} yardage={yarn.yardage} color={yarn.color} onIonChange={handleYarnChange} />
          <Gauge gauge={project.gauge} onIonChange={handleProjectChange} />
          <Date date_started={project.date_started} date_finished={project.date_finished} onIonChange={handleProjectChange} />

          <button className={styles.submitButton} onClick={handleAddProject}>Add Project</button>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
