import { IonIcon, IonCol, IonRow, IonGrid } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useState } from 'react';
import Yarn from './Yarn';

const YarnShow = () => {
    const [show, setShow] = useState(false);

    const toggleShow = (e: any) => {
        e.preventDefault();
        setShow(!show);
    };

    return (
        <>
            <IonGrid>
                <IonRow>
                    <button onClick={toggleShow}>
                        <IonIcon icon={add} />
                    </button>
                    <IonCol size="auto">
                        <label> Yarn Info:</label>
                    </IonCol>
                </IonRow>
            </IonGrid>

            {show ?
                <Yarn />
                : null}
        </>
    );
}

export default YarnShow;
