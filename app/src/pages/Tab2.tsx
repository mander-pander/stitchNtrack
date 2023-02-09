import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [project, setProject] = useState('');

  async function handleAddProject(e: any) {
    e.preventDefault();
    let res = await axios.post('http://localhost:3001/project')
    console.log(res);
  }

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
        <form onSubmit={handleAddProject}>
          <label>Project Name:
            <input type="text" />
          </label>
          <label>Yarn:
            <input type="text" />
          </label>
          <label>Needle/Hook Size:
            <input type="number" />
          </label>
          <label>Gauge:
            <input type="number" />
          </label>
          <label>Pattern Repeats:
            <input type="text" />
          </label>
          <label>Date Started:
            <input type="date" />
          </label>
          <input type="submit" />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
