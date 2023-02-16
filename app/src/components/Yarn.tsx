import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon, IonItem, IonLabel, IonInput } from '@ionic/react';

const Yarn = ({yarn_name, weight, yardage, color, onIonChange}:any) => {
    const [show, setShow] = useState(false);

    const toggleShow = (e: any) => {
        e.preventDefault();
        setShow(!show);
    };

    return (
        <IonItem>
            <button onClick={toggleShow}>
             <IonIcon icon={add}  />
            </button>
            <IonLabel position="stacked"> Yarn Info:</IonLabel>
            {show ?
                <div>
                    <IonLabel position="stacked"> Name: </IonLabel>
                        <IonInput type="text" name="yarn_name" value={yarn_name} onIonChange={onIonChange}></IonInput>
                    <IonLabel position="stacked"> Weight: </IonLabel>
                        <IonInput type="number" name="weight" value={weight} onIonChange={onIonChange}></IonInput>
                    <IonLabel position="stacked"> Yardage: </IonLabel>
                        <IonInput type="number" name="yardage" value={yardage} onIonChange={onIonChange}></IonInput>
                    <IonLabel position="stacked"> Color:  </IonLabel>
                        <IonInput type="text" name="color" value={color} onIonChange={onIonChange}></IonInput>
                </div>
            : null}
        </IonItem>
    );
}

export default Yarn;
