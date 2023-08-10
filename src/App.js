import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Auth';
import Plan from './components/Plan';

function App() {
  return (
    <div className="App bg-[#1e4d91] min-h-screen">
      <Routes>
        <Route path="/" element={<Home activePlan={true} />} />
        <Route path="/register" element={<Auth type ={'register'} />} />
        <Route path="/login" element={<Auth type ={'login'}/>} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </div>
  );
}

export default App;
