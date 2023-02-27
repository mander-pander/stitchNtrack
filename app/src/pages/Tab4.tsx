import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonItem } from '@ionic/react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Tab4: React.FC = () => {
  const [yarns, setYarns] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/yarn`)
    .then((result: any) => {
      setYarns(result.data);
    },
    (error) => {
      console.log(error);
    })
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stash</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stash</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList inset={true}>
          {yarns.map((yarn) => <IonItem><IonLabel> {yarn.name} </IonLabel></IonItem>)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
