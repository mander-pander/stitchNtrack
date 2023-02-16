import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon, IonItem, IonLabel, IonInput, IonGrid, IonRow, IonCol } from '@ionic/react';

const Tool = ({ needle_size, onIonChange }: any) => {
    const [show, setShow] = useState(false);

    const toggleShow = (e: any) => {
        e.preventDefault();
        setShow(!show);
    };

    return (
        <IonItem>
            <IonGrid>
                <IonRow>
                    <IonCol size="auto">
                        <button  onClick={toggleShow}>
                            <IonIcon icon={add} />
                        </button>
                    </IonCol>
                    <IonCol>
                        <IonLabel position="stacked"> Needle/Hook Size: </IonLabel>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        {show ? <IonInput type="number" name="needle_size" value={needle_size} onIonChange={onIonChange}></IonInput> : null}
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonItem>
    );
}

export default Tool;
