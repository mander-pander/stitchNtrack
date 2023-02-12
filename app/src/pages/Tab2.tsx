import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import axios from 'axios';
import './Tab2.css';

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
    console.log("yarn info", yarn)
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
  }

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
          <label>Needle/Hook Size:
            <input type="number" name="needle_size" value={project.needle_size} onChange={handleProjectChange}/>
          </label>
          <label>Yarn Info:
            <label> Name:
              <input type="text" name="yarn_name" value={yarn.yarn_name} onChange={handleYarnChange}/>
            </label>
            <label> weight:
              <input type="number" name="weight" value={yarn.weight} onChange={handleYarnChange}/>
            </label>
            <label> Yardage:
              <input type="number" name="yardage" value={yarn.yardage} onChange={handleYarnChange}/>
            </label>
            <label> Color:
              <input type="text" name="color" value={yarn.color} onChange={handleYarnChange}/>
            </label>
          </label>
          <label>Gauge:
            <input type="number" name="gauge" value={project.gauge} onChange={handleProjectChange}/>
          </label>
          <label>Start Date:
            <input type="date" name="date_started" value={project.date_started} onChange={handleProjectChange}/>
          </label>
          <label>Finish Date:
            <input type="date" name="date_finished" value={project.date_finished} onChange={handleProjectChange}/>
          </label>
          <input type="submit" />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
