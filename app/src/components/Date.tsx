import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon, IonGrid, IonRow, IonCol, IonLabel, IonInput } from '@ionic/react';

const Date = ({date_started, date_finished, onIonChange}: any) => {
    const [startDateShow, setStartDateShow] = useState(false);
    const [finDateShow, setFinDateShow] = useState(false);

    const toggleStartShow = (e: any) => {
        e.preventDefault();
        setStartDateShow(!startDateShow);
    };

    const toggleFinShow = (e: any) => {
        e.preventDefault();
        setFinDateShow(!finDateShow);
    };

    return (
        <div>
            <IonGrid>
                <IonRow>
                    <IonCol>
                <button onClick={toggleStartShow}>
                    <IonIcon icon={add} />
                </button>
                <IonLabel position="stacked"> Start Date: </IonLabel>
                </IonCol>
                </IonRow>
                <IonRow>
                {startDateShow ? <IonInput type="date" name="date_started" value={date_started} onIonChange={onIonChange}></IonInput> : null }
                </IonRow>
            </IonGrid>
            <IonGrid>
                <IonRow>
                    <IonCol>
                <button onClick={toggleFinShow} >
                    <IonIcon icon={add} />
                </button>
                <IonLabel position="stacked"> Finish Date: </IonLabel>
                </IonCol>
                </IonRow>
                <IonRow>
                    {finDateShow ? <IonInput type="date" name="date_finished" value={date_finished} onIonChange={onIonChange}></IonInput> : null }
                </IonRow>
            </IonGrid>
        </div>

    )

}

export default Date;
