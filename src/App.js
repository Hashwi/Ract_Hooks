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

// const handleOnUpdateEvent =(message ,age) => {
//   console.log(message, age)
// }

const handleClick = () => {
  
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <h1>Hello World!</h1>

        {/* <UserProfile 
        title = 'Display User Profile'
        name = 'hash'
        address={{
          zipCode:"1567",
          city:'colombo'
        }}

        onUpdateClicked={handleOnUpdateEvent}
        />
        {/* <span>
        {UserRoles.ADMIN} 
        {' '}
        {UserRoles.USER}
        </span> */} 

        <button onClick={handleClick}>OK</button>
        
     
      </header>
    </div>
  );
}


export default App;
