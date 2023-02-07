import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState , useEffect} from 'react';

const Tab1: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/users`)
    .then(res => res.json())
    .then((result) => {setData(result[0])},
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
