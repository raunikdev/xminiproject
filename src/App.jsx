import './App.css'
import Header from './components/Header.jsx';
import Count from './components/Count.jsx';
import avatar1 from './components/image/avatar1.png';
import {useState} from 'react';
import Loginbuddy from './components/Loginbuddy.jsx';
import users from './components/data/users.js'

function App() {
  const [Login,setLogin]= useState(false);
  return (
    <>
     <div style={{display:Login?'none':'block'}}><Loginbuddy/></div>
      <Header Login={Login} setLogin={setLogin}/>
      {Login && (
        <div className="grid-template" >
          {users.map(user=>(
            <Count
              image={avatar1}
              name={user.name}
              age = {user.age}
              skills={user.skills}
            />
          ))}
        </div>
      )}
        
    </>
  )
}

export default App;
