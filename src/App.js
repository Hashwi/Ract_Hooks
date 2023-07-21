import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile/UserProfile';

// import UserProfile, {UserRoles} from './components/UserProfile/UserProfile';

function App() {
const[title , setTitle] = useState('Hello There!');

// useEffect (() => {
//  setTimeout(()=>{
//   setTitle('Hello It is ME!')
//  }, 5000)
// }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <h1>Hello World!</h1>

        <UserProfile 
        title = {title}
        name = 'hash'
        address={{
          zipCode:1567,
          city: 'colombo'

        }}
        />
        {/* <span>
        {UserRoles.ADMIN} 
        {' '}
        {UserRoles.USER}
        </span> */}
        
     
      </header>
    </div>
  );
}


export default App;
