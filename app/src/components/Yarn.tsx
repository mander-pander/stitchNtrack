import {  IonItem, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';


const Yarn = ({ yarn_name, weight, yardage, color, onChange }: any) => {

    return (
        <div>
            <IonGrid>
                <IonRow>
                    <IonCol size="auto">
                        <IonLabel position="stacked"> Yarn Info:</IonLabel>
                    </IonCol>
                </IonRow>
                    <div>
                        <IonRow>
                            <IonItem>
                                <IonCol size="auto"><label> Name: </label></IonCol>
                                <IonCol><InputText placeholder="Yarn name" type="text" name="yarn_name" value={yarn_name} onChange={onChange}></InputText></IonCol>
                            </IonItem>
                        </IonRow>
                        <IonRow>
                            <IonItem>
                                <IonCol size="auto"><label> Weight: </label></IonCol>
                                <IonCol><InputNumber type="number" name="weight" value={weight} onChange={onChange}></InputNumber></IonCol>
                            </IonItem>
                        </IonRow>
                        <IonRow>
                            <IonItem>
                                <IonCol size="auto"><label> Yardage: </label></IonCol>
                                <IonCol><InputNumber type="number" name="yardage" value={yardage} onChange={onChange}></InputNumber></IonCol>
                            </IonItem>
                        </IonRow>
                        <IonRow>
                            <IonItem>
                                <IonCol size="auto"><label> Color:  </label></IonCol>
                                <IonCol><InputText placeholder="Yarn color" type="text" name="color" value={color} onChange={onChange}></InputText></IonCol>
                            </IonItem>
                        </IonRow>
                    </div>
            </IonGrid>
        </div>
    );
}

export default Yarn;
