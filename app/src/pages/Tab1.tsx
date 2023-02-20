import { IonGrid, IonRow, IonCol, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal } from '@ionic/react';
import styles from './Tab1.module.css';
import { documentTextOutline } from 'ionicons/icons';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

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

  return (
    <>
      <IonGrid className={styles.projectItem}>
        <div key={project.id}>
          <IonRow>
            <IonCol className={styles.projectInfo} size="auto"><IonIcon id={`open-modal-${project.id}`} icon={documentTextOutline} /> </IonCol>
            <IonCol className={styles.projectInfo}><p >{project.name}</p> </IonCol>
          </IonRow>
        </div>
      </IonGrid>
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
            <IonContent className="ion-padding">
              <p>Needle or Hook Size: </p> <input value={project.needle_size}/>
              <p>Gauge: </p> <input value={project.gauge}/>
              <p>Date Started: </p> <input value={project.date_started} />
              <p>Date Finished: </p> <input value={project.date_finished} />
            </IonContent>
          </>
        }
      </IonModal>
    </>
  )
}
