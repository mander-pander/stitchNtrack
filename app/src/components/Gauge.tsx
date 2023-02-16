import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon, IonItem, IonLabel, IonInput } from '@ionic/react';

const Gauge = ({gauge, onIonChange}:any) => {
    const [show, setShow] = useState(false);

    const toggleShow = (e: any) => {
        e.preventDefault();
        setShow(!show);
    };
    //need value (value={gauge})

    return (
        <IonItem>
            <button onClick={toggleShow} >
             <IonIcon icon={add} />
            </button>
            <IonLabel position="stacked"> Gauge: </IonLabel>

                {show ? <IonInput type="number" name="gauge" value={gauge} onIonChange={onIonChange}></IonInput> : null }

        </IonItem>
    )
}

export default Gauge;
