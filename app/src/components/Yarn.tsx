import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon, IonItem, IonLabel, IonInput, IonGrid, IonRow, IonCol } from '@ionic/react';

const Yarn = ({ yarn_name, weight, yardage, color, onIonChange }: any) => {
    const [show, setShow] = useState(false);

    const toggleShow = (e: any) => {
        e.preventDefault();
        setShow(!show);
    };

    return (
        <div>
            <IonGrid>
                <IonRow>
                    <IonCol size="auto">
                        <button onClick={toggleShow}>
                            <IonIcon icon={add} />
                        </button>
                        <IonLabel position="stacked"> Yarn Info:</IonLabel>
                    </IonCol>
                </IonRow>

                {show ?
                    <div>
                        <IonRow>
                            <IonItem>
                                <IonCol size="auto"><IonLabel> Name: </IonLabel></IonCol>
                                <IonCol><IonInput placeholder="Yarn name" type="text" name="yarn_name" value={yarn_name} onIonChange={onIonChange}></IonInput></IonCol>
                            </IonItem>
                        </IonRow>
                        <IonRow>
                            <IonItem>
                                <IonCol size="auto"><IonLabel> Weight: </IonLabel></IonCol>
                                <IonCol><IonInput type="number" name="weight" value={weight} onIonChange={onIonChange}></IonInput></IonCol>
                            </IonItem>
                        </IonRow>
                        <IonRow>
                            <IonItem>
                                <IonCol size="auto"><IonLabel> Yardage: </IonLabel></IonCol>
                                <IonCol><IonInput type="number" name="yardage" value={yardage} onIonChange={onIonChange}></IonInput></IonCol>
                            </IonItem>
                        </IonRow>
                        <IonRow>
                            <IonItem>
                                <IonCol size="auto"><IonLabel> Color:  </IonLabel></IonCol>
                                <IonCol><IonInput placeholder="Yarn color" type="text" name="color" value={color} onIonChange={onIonChange}></IonInput></IonCol>
                            </IonItem>
                        </IonRow>
                    </div>
                    : null}
            </IonGrid>
        </div>
    );
}

export default Yarn;
