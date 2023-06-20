import './App.css';
import Activity from './component/activity/Activity';
import NewActivity from './component/activity/NewActivity';
import ActivityPage from './component/activity/ActivityPage';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import WeatherData from './component/weather/WeatherData';
import Missing from './component/error/Missing';
import EditActivity from './component/activity/EditActivity';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react';
import API from './api/Activity';


function App() {

  const navigate = useNavigate();
  const[activities, setActivities] = useState([]);

  const[activityType,setActivityType] = useState('');
  const[activityDateTime,setActivityDateTime] = useState('');
  const[activityTaskPerformer,setActivityTaskPerformer] = useState('');
  const[activitypitch,setActivityPitch] = useState('');

  const[editActivityType,setEditActivityType] = useState('');
  const[editActivityDateTime,setEditActivityDateTime] = useState('');
  const[editActivityTaskPerformer,setEditActivityTaskPerformer] = useState('');
  const[editActivitypitch,setEditActivitypitch] = useState('');

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await API.get('/activities');
        setActivities(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range 
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchActivities();
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const id = activities.length ? activities[activities.length - 1].id + 1 : 1;
    const newActivity = { id, activityType: activityType, datetime: activityDateTime, taskPerformer: activityTaskPerformer, pitch: activitypitch };
    try {
      const response = await API.post('/activities',newActivity)
      const allactivities = [...activities, response.data];
      setActivities(allactivities);
      setActivityType('');
      setActivityDateTime('');
      setActivityTaskPerformer('');
      setActivityPitch('');
      navigate('/');
    }
    catch(err){
      console.log(`Error: ${err.message}`);
    }

  }
  const handleEdit = async (id) => {
    const updatedActivity = { id, activityType: editActivityType, datetime: editActivityDateTime, taskPerformer: editActivityTaskPerformer, pitch: editActivitypitch };
    try {
      const response = await API.put(`/activities/${id}`, updatedActivity);
      setActivities(activities.map(activity => activity.id === id ? { ...response.data } : activity));
      setEditActivityType('');
      setEditActivityDateTime('');
      setEditActivityTaskPerformer('');
      setEditActivitypitch('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  const handleDelete = async(id) => {
    try {
      await API.delete(`/activities/${id}`);
      const activitiesList = activities.filter(activity => activity.id !== id);
      setActivities(activitiesList);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }
  return (
    <div>
      <Header title='Activity Sechdular'/>
        <Routes>
          <Route exact path="/" 
            element={
            <>
              <WeatherData /> 
              <Activity activities={activities}/> 
              <alert>{}</alert>
            </>}
          /> 
          <Route exact path="/editActivity/:id"
            element={
              < EditActivity
                activities={activities}
                handleEdit={handleEdit}
                editActivityType={editActivityType}
                setEditActivityType={setEditActivityType}
                editActivityDateTime={editActivityDateTime}
                setEditActivityDateTime={setEditActivityDateTime}
                editActivityTaskPerformer={editActivityTaskPerformer}
                setEditActivityTaskPerformer={setEditActivityTaskPerformer}
                editActivitypitch={editActivitypitch}
                setEditActivitypitch={setEditActivitypitch}
              />
            }
          /> 
          <Route exact path="/activity/:id" 
            element={
              <ActivityPage 
                activities={activities}
                handleDelete={handleDelete}
              />
            }
          />
          <Route exact path="/newActivity" 
            element={
              <NewActivity
                handleSubmit={handleSubmit}
                activityType={activityType}
                setActivityType={setActivityType}
                activityDateTime={activityDateTime}
                setActivityDateTime={setActivityDateTime}
                activityTaskPerformer={activityTaskPerformer}
                setActivityTaskPerformer={setActivityTaskPerformer}
                activitypitch={activitypitch}
                setActivityPitch={setActivityPitch}
              />
            }
          /> 
          <Route path="*" element={<Missing/>}/> 
        </Routes>
      <Footer/>
    </div>

  );
}

export default App;
