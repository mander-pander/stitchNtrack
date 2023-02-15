import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon, IonItem, IonLabel, IonInput } from '@ionic/react';

const Gauge = ({gauge, onChange}:any) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };
    //need value (value={gauge})

    return (
        <IonItem>
            <button>
             <IonIcon icon={add} onClick={toggleShow} />
            </button>
            <IonLabel position="stacked"> Gauge: </IonLabel>

                {show ? <IonInput type="number" name="gauge" value={gauge} onChange={onChange}></IonInput> : null }

        </IonItem>
    )
}

export default Gauge;
