import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserAccount from './pages/UserAccount';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/user-account' element={<UserAccount/>}/>
        </Routes>
    </div>
  );
}

export default App;
