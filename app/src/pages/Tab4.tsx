import { IonModal, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList} from '@ionic/react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { trashOutline} from 'ionicons/icons';


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
          {yarns.map((yarn) => <TriggerWithModal yarn={yarn} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;

function TriggerWithModal({ yarn }: any) {
  const modal = useRef<HTMLIonModalElement>(null);

  const handleDelete = async (yarn_id: number) => {
    let params = {data: {yarn_id}};
      let res = await axios.delete(`http://localhost:3001/yarn/`, {
        params
      });
      console.log(res);
  }

  return (
    <>
      <div key={yarn.id}>
        <IonCard id={`open-modal-${yarn.id}`} >
          <IonCardHeader>
            <IonCardTitle>
              {yarn.name}
            </IonCardTitle>
            <IonCardContent>
              optional content here
            </IonCardContent>
          </IonCardHeader>
        </IonCard>
      </div>
      <IonModal ref={modal} trigger={`open-modal-${yarn.id}`}>
          <>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                </IonButtons>
                <IonTitle>{yarn.name}</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <p>Weight: {yarn.weight}</p>

              <IonIcon icon={trashOutline} onClick={() => handleDelete(yarn.id)}/>
            </IonContent>
          </>
      </IonModal>
    </>
  )
}
