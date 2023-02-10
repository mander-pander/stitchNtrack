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

  const handleAddProject = async(e: any) => {
    e.preventDefault();
    let res = await axios.post('http://localhost:3001/project', {
      project
    })
    console.log(res);
    console.log(project)
  }

  const handleChange = (e: any) => {
    setProject({
      ...project,
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
            <input type="text" name="name" value={project.name}  onChange={handleChange}/>
          </label>
          <label>Needle/Hook Size:
            <input type="number" name="needle_size" value={project.needle_size} onChange={handleChange}/>
          </label>
          <label>Gauge:
            <input type="number" name="gauge" value={project.gauge} onChange={handleChange}/>
          </label>
          <label>Start Date:
            <input type="date" name="date_started" value={project.date_started} onChange={handleChange}/>
          </label>
          <label>Finish Date:
            <input type="date" name="date_finished" value={project.date_finished} onChange={handleChange}/>
          </label>
          <input type="submit" />
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
