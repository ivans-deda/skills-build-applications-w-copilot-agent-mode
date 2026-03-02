
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import { NavLink, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <NavLink className="navbar-brand text-white d-flex align-items-center" to="/">
          <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" style={{height: '40px', marginRight: '10px'}} />
          Octofit Tracker
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink className="nav-link text-white" to="/activities">Activities</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/teams">Teams</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/workouts">Workouts</NavLink></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/" element={<div className="mt-5"><h1 className="display-4">Welcome to Octofit Tracker!</h1><p className="lead">Track your fitness activities, teams, and more.</p></div>} />
      </Routes>
    </div>
  );
}

export default App;
