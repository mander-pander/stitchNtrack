import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal } from '@ionic/react';
import styles from './Tab1.module.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { trashOutline} from 'ionicons/icons';

const Tab1: React.FC = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/project`)
      .then((result: any) => {
        setProjects(result.data);
      },
        (error) => {
          console.log(error);
        })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
        {projects.map((project) => <TriggerWithModal project={project} />)}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

function TriggerWithModal({ project }: any) {
  const modal = useRef<HTMLIonModalElement>(null);
  const [edit, setEdit] = useState(false);
  // const [project, setProject] = useState({
  //   needle_size: {project.needle_size}
  // })

  const handleProjectUpdate = async (e: any) => {
    e.preventDefault();
    setEdit(false);
    let res = await axios.put(`http://localhost:3001/project/${project.id}`, {
      needle_size: "{project.needle_size}",
      gauge: "{project.gauge}",
    });
    console.log(res);
  }

  const handleChange = (e: any) => {
    e.preventDefault();

  }

  const handleDelete = async (project_id: number) => {
    let params = {data: {project_id}};
      let res = await axios.delete(`http://localhost:3001/project/`, {
        params
      });
      console.log(res);
  }

  return (
    <>
      <div key={project.id}>
        <IonCard id={`open-modal-${project.id}`} >
          <IonCardHeader>
            <IonCardTitle className={styles.projectTitle}>
              {project.name}
            </IonCardTitle>
            <IonCardContent>
              optional content here
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </div>
      <IonModal ref={modal} trigger={`open-modal-${project.id}`}>
        {!edit &&
          <>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                </IonButtons>
                <IonTitle>{project.name}</IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={() => setEdit(!edit)}>Edit</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <p>Needle or Hook Size: {project.needle_size}</p>
              <p>Gauge: {project.gauge}</p>
              <p>Date Started: {project.date_started}</p>
              <p>Date Finished: {project.date_finished}</p>
              <p>Status: {project.status}</p>
              <p>Notes: {project.notes}</p>
              <IonIcon icon={trashOutline} onClick={() => handleDelete(project.id)}/>
            </IonContent>
          </>
        }
        {edit &&
          <>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton onClick={() => setEdit(false)}>Cancel</IonButton>
                </IonButtons>
                <IonTitle>{project.name}</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent >
              <div className={styles.editPage}>
                <p>Needle or Hook Size: </p>
                <input type="number" defaultValue={project.needle_size}/>
                <p>Gauge: </p>
                <input type="number" defaultValue={project.gauge}/>
                <p>Date Started: </p>
                <input defaultValue={project.date_started}/>
                <p>Date Finished: </p>
                <input defaultValue={project.date_finished} />
                <p>Status: </p>
                <input defaultValue={project.status} />
                <p>Notes: </p>
                <input defaultValue={project.notes} />
                <button onClick={handleProjectUpdate}>Update Project</button>
              </div>
            </IonContent>
          </>
        }
      </IonModal>
    </>
  )
}
