import { IonModal, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { trashOutline } from 'ionicons/icons';
import Yarn from '../components/Yarn';
import styles from './Tab4.module.css';

const Tab4: React.FC = () => {
  const [yarns, setYarns] = useState<any[]>([]);
  const [addForm, setAddForm] = useState(false);
  const [yarn, setYarn] = useState({
    yarn_name: '',
    weight: 0,
    yardage: 0,
    color: '',
    project_id: 0
  });


  const handleAddYarn = async (e: any) => {
    e.preventDefault();
    let res = await axios.post('http://localhost:3001/yarn', {
      yarn
    })
    setAddForm(false);
    return res;
  }

  useEffect(() => {
    const getYarn = async() => {
      try {
        let result = await axios.get(`http://localhost:3001/yarn`)
        setYarns(result.data);
      } catch (error) {
        setYarns([null]);
      }
    }
    getYarn();
  });

  const handleYarnChange = (e: any) => {
    e.preventDefault();
    setYarn({
      ...yarn,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {!addForm &&
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Stash</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setAddForm(!addForm)}>Add New</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen >
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Stash</IonTitle>
              </IonToolbar>
            </IonHeader>
            <div className={styles.listContainer}>
              {yarns.map((yarn) => <TriggerWithModal yarn={yarn} />)}
            </div>
          </IonContent>
        </IonPage>
      }
      {addForm &&
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Add Yarn</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setAddForm(!addForm)}>Cancel</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Add Yarn To Stash</IonTitle>
              </IonToolbar>
            </IonHeader>
            <Yarn yarn_name={yarn.yarn_name} weight={yarn.weight} yardage={yarn.yardage} color={yarn.color} onIonChange={handleYarnChange} />
            <IonButtons>
              <IonButton onClick={handleAddYarn}>Add Yarn</IonButton>
            </IonButtons>
          </IonContent>
        </IonPage>
      }
    </>
  );
};

export default Tab4;

function TriggerWithModal({ yarn }: any) {
  const modal = useRef<HTMLIonModalElement>(null);


  const handleDelete = async (yarn_id: number) => {
    let params = { data: { yarn_id } };
    let res = await axios.delete(`http://localhost:3001/yarn/`, {
      params
    });
    console.log(res);
  };

  return (
    <>
      <div key={yarn.id}>
        <IonCard id={`open-modal-${yarn.id}`} >
        <img alt="yarn" src="https://picsum.photos/150" />
          <IonCardHeader>
            <IonCardTitle>
              {yarn.name}
            </IonCardTitle>
            <IonCardContent>
              {yarn.yardage} yards in stash
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

            <IonIcon icon={trashOutline} onClick={() => handleDelete(yarn.id)} />
          </IonContent>
        </>
      </IonModal>
    </>
  )
}
