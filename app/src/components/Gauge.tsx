import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Gauge = ({gauge, onChange}:any) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };
    //need value (value={gauge})

    return (
        <div>
            <IonIcon icon={add} onClick={toggleShow} /> Gauge:
            {show ? <input type="number" name="gauge" value={gauge} onChange={onChange} /> : null }
        </div>
    )
}

export default Gauge;
