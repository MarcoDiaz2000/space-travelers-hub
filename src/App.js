import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchMissions } from './redux/missions/missionsSlice';
import NavigationComponent from './components/NavigationComponent';
import './styles/App.css';
import Rockets from './router/Rockets';
import Missions from './router/Missions';
import { getRockets } from './redux/rockets/rocketsSlice';
import MyProfile from './components/myprofile/MyProfile';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <Router>
      <NavigationComponent />
      <Routes>
        <Route path="/space-travelers-hub" element={<Navigate to="/" />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="*" element={<div>If page not found it goes here</div>} />
      </Routes>
    </Router>
  );
}

export default App;
