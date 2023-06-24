import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NavigationComponent from './components/NavigationComponent';
import './styles/App.css';
import Rockets from './router/Rockets';
import Missions from './router/Missions';
import MyProfile from './components/myprofile/MyProfile';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
