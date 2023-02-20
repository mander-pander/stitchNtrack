import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon, IonGrid, IonRow, IonCol, IonLabel, IonInput } from '@ionic/react';

const Gauge = ({ gauge, onIonChange }: any) => {
    const [show, setShow] = useState(false);

    const toggleShow = (e: any) => {
        e.preventDefault();
        setShow(!show);
    };
    //need value (value={gauge})

    return (
        <div>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <button onClick={toggleShow} >
                            <IonIcon icon={add} />
                        </button>
                        <IonLabel position="stacked"> Gauge: </IonLabel>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        {show ? <IonInput type="number" name="gauge" value={gauge} onIonChange={onIonChange}></IonInput> : null}
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    )
}

export default Gauge;
