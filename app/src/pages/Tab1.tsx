import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { useState , useEffect} from 'react';
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
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Projects</IonTitle>
          </IonToolbar>
        </IonHeader>
          {projects.map((project) => (
          <div>
              <li>Project name: {project.name}</li>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
