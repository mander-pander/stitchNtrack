import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { useState , useEffect} from 'react';
import axios from 'axios';

const Tab1: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/project`)
    .then((result: any) => {
      setData(result.data[0].name)
      console.log(result.data)
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
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>{data}</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
