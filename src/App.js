import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile/UserProfile';

// import UserProfile, {UserRoles} from './components/UserProfile/UserProfile';

function App() {
const[userLoggedIn , setUserLoggedIn] = useState(false);
const[users, setUsers] = useState(['user 01', 'user 02', 'user 03', 'user 04'])

// useEffect (() => {
//  setTimeout(()=>{
//   setTitle('Hello It is ME!')
//  }, 5000)
// }, [])

// const handleOnUpdateEvent =(message ,age) => {
//   console.log(message, age)
// }

// const handleOkClick = () => {
//   console.log('ok btn pressesd')
// }
// const handleCancelClick = () => {
//   console.log('Cancel btn pressesd')
// }

// const handleInputChange = (event) => {
//  console.log(event.target.value)
// }

const onClickHandler = () => {
  setUserLoggedIn(!userLoggedIn)

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
        {/* <input type ='text' onChange={(event) => handleInputChange (event)}></input>

        <button onClick={handleOkClick}>OK</button>
        <button onClick={handleCancelClick}>Cancel</button> */}
        
        { userLoggedIn && <p>Hello</p>}

        {users.map(user => <div key={Math.random()}> 
          <li>{user}</li>
        </div>)} <br></br>

        <button onClick={onClickHandler}>{!userLoggedIn ? "LogIn" : "Logout"}</button>
     
      </header>
    </div>
  );
}


export default App;
