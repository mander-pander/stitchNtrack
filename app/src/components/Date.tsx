import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon, IonItem, IonLabel, IonInput } from '@ionic/react';

const Date = ({date_started, date_finished, onChange}: any) => {
    const [startDateShow, setStartDateShow] = useState(false);
    const [finDateShow, setFinDateShow] = useState(false);

    const toggleStartShow = () => {
        setStartDateShow(!startDateShow);
    };

    const toggleFinShow = () => {
        setFinDateShow(!finDateShow);
    };

    return (
        <div>
            <IonItem>
                <button>
                    <IonIcon icon={add} onClick={toggleStartShow} />
                </button>
                <IonLabel position="stacked">Start Date:</IonLabel>
                {startDateShow ? <IonInput type="date" name="date_started" value={date_started} onChange={onChange}></IonInput> : null }
            </IonItem>
            <IonItem>
                <button>
                    <IonIcon icon={add} onClick={toggleFinShow} />
                </button>
                <IonLabel position="stacked">Finish Date:</IonLabel>
                    {finDateShow ? <IonInput type="date" name="date_finished" value={date_finished} onChange={onChange}></IonInput> : null }
            </IonItem>
        </div>

    )

}

export default Date;
