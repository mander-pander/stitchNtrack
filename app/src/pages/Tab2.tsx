import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import axios from 'axios';
import './Tab2.css';
import Yarn from '../components/Yarn';
import Tool from '../components/Tool';
import Gauge from '../components/Gauge';
import Date from '../components/Date';


const Tab2: React.FC = () => {

  const [project, setProject] = useState({
    name: '',
    needle_size: 0,
    gauge: 0,
    user_id: 0,
    date_started: '',
    date_finished: ''
  });

  const [yarn, setYarn] = useState({
    yarn_name: '',
    weight: 0,
    yardage: 0,
    color: '',
    project_id: 0
});

  const handleAddProject = async(e: any) => {
    e.preventDefault();
    let res = await axios.post('http://localhost:3001/project', {
      project, yarn
    })
    console.log(res);
    console.log(project)
    console.log("yarn info")
  }

  const handleProjectChange = (e: any) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  }

  const handleYarnChange = (e: any) => {
    setYarn({
        ...yarn,
        [e.target.name]: e.target.value
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add a Project</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add a Project</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form onSubmit={handleAddProject}>

          <label>Project Name:
            <input type="text" name="name" value={project.name}  onChange={handleProjectChange}/>
          </label>

          <Tool needle_size={project.needle_size} onChange={handleProjectChange} />
          <Yarn yarn_name={yarn.yarn_name} weight={yarn.weight} yardage={yarn.yardage} color={yarn.color} onChange={handleYarnChange}/>
          <Gauge gauge={project.gauge} onChange={handleProjectChange} />
          <Date date_started={project.date_started} date_finished={project.date_finished} onChange={handleProjectChange} />

          <input type="submit" />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
