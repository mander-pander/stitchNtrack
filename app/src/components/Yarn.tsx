import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon, IonItem, IonLabel, IonInput } from '@ionic/react';

const Yarn = ({yarn_name, weight, yardage, color, onChange}:any) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <IonItem>
            <button>
             <IonIcon icon={add} onClick={toggleShow} />
            </button>
            <IonLabel position="stacked"> Yarn Info:</IonLabel>
            {show ?
                <div>
                    <IonLabel position="stacked"> Name: </IonLabel>
                        <IonInput type="text" name="yarn_name" value={yarn_name} onChange={onChange}></IonInput>
                    <IonLabel position="stacked"> Weight: </IonLabel>
                        <IonInput type="number" name="weight" value={weight} onChange={onChange}></IonInput>
                    <IonLabel position="stacked"> Yardage: </IonLabel>
                        <IonInput type="number" name="yardage" value={yardage} onChange={onChange}></IonInput>
                    <IonLabel position="stacked"> Color:  </IonLabel>
                        <IonInput type="text" name="color" value={color} onChange={onChange}></IonInput>
                </div>
            : null}
        </IonItem>
    );
}

export default Yarn;
