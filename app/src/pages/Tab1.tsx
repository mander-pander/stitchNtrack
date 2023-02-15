import { IonItem, IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonGrid, IonRow, IonCol, IonModal } from '@ionic/react';
import './Tab1.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { add } from 'ionicons/icons';

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

function TriggerWithModal(props: any) {
  let { project } = props;
  const modal = useRef<HTMLIonModalElement>(null);

  return (
    <>
      <div key={project.id} id={`open-modal-${project.id}`}>
          <p >{project.name}</p>
      </div>
      <IonModal ref={modal} trigger={`open-modal-${project.id}`}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
            </IonButtons>
            <IonTitle>Welcome</IonTitle>
            <IonButtons slot="end">
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <p>modal info</p>
          </IonItem>
        </IonContent>
      </IonModal>
    </>
  )
}
