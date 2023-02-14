import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Yarn = ({yarn_name, weight, yardage, color, onChange}:any) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <div>
            <IonIcon icon={add} onClick={toggleShow} /> Yarn Info:
            {show ?
                <div>
                    <label> Name:
                        <input type="text" name="yarn_name" value={yarn_name} onChange={onChange} />
                    </label>
                    <label> weight:
                        <input type="number" name="weight" value={weight} onChange={onChange} />
                    </label>
                    <label> Yardage:
                        <input type="number" name="yardage" value={yardage} onChange={onChange} />
                    </label>
                    <label> Color:
                        <input type="text" name="color" value={color} onChange={onChange} />
                    </label>
                </div>
            : null}
        </div>
    );
}

export default Yarn;
