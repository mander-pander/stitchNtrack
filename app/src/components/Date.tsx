import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

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
            <IonIcon icon={add} onClick={toggleStartShow}/> Start Date:
            {startDateShow ? <input type="date" name="date_started" value={date_started} onChange={onChange}/> : null }

            <IonIcon icon={add} onClick={toggleFinShow}/> Finish Date:
            {finDateShow ? <input type="date" name="date_finished" value={date_finished} onChange={onChange}/> : null }
        </div>

    )

}

export default Date;
