import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Tool = ({needle_size, onChange}:any) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <div>
            <IonIcon icon={add} onClick={toggleShow}/> Needle/Hook Size:
            {show ? <input type="number" name="needle_size" value={needle_size} onChange={onChange} /> : null }
        </div>
    );
}

export default Tool;
