
import './App.css';
import { AdminDashboard } from './Component/AdminDashboard';
import { AllRoutes } from './Component/AllRoutes';

function App() {
  return (
    <div className="App">
       {/* <img src={"https://image.pitchbook.com/0RTMFsKcFhgnhzwWpdz6hRVf3nk1643023238823_200x200"} className="App-logo" alt="logo" /> */}
      <h1>Admin Dashboard</h1>
      {/* <AdminDashboard /> */}
      <AllRoutes />
      
    </div>
  );
}

export default App;
