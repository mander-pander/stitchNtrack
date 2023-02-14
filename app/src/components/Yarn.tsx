import { useState } from 'react';
import { add } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Yarn = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    };

    const [yarn, setYarn] = useState({
        yarn_name: '',
        weight: 0,
        yardage: 0,
        color: '',
        project_id: 0
    });

    const handleYarnChange = (e: any) => {
        setYarn({
            ...yarn,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div>
            <IonIcon icon={add} onClick={toggleShow} /> Yarn Info:
            {show ?
                <div>
                    <label> Name:
                        <input type="text" name="yarn_name" value={yarn.yarn_name} onChange={handleYarnChange} />
                    </label>
                    <label> weight:
                        <input type="number" name="weight" value={yarn.weight} onChange={handleYarnChange} />
                    </label>
                    <label> Yardage:
                        <input type="number" name="yardage" value={yarn.yardage} onChange={handleYarnChange} />
                    </label>
                    <label> Color:
                        <input type="text" name="color" value={yarn.color} onChange={handleYarnChange} />
                    </label>
                </div>
            : null}
        </div>
    );
}

export default Yarn;
