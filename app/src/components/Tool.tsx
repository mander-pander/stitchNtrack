import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon, IonItem, IonLabel, IonInput } from '@ionic/react';

const Tool = ({needle_size, onChange}:any) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <IonItem>
            <button>
             <IonIcon icon={add} onClick={toggleShow} />
            </button>
            <IonLabel position="stacked"> Needle/Hook Size: </IonLabel>
                {show ? <IonInput type="number" name="needle_size" value={needle_size} onChange={onChange}></IonInput> : null }
        </IonItem>
    );
}

export default Tool;
