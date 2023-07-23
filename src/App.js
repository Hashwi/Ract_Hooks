import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile/UserProfile';

// import UserProfile, {UserRoles} from './components/UserProfile/UserProfile';

function App() {
const[userLoggedIn , setUserLoggedIn] = useState(false);
const [users, setUsers] = useState([
  { value: 'user 01', key: 1},
  { value: 'user 02', key: 2 },
  { value: 'user 03', key: 3 },
  { value: 'user 04', key: 4 }
]);


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

        {/* giving key using index */}
        {users.map((user) => <div key={user.key}> 
          <li>{user.value}</li>
        </div>)} <br></br>

        {/* giving a key using math.random() */}
        {/* {users.map(user => <div key={Math.random()}> 
          <li>{user}</li>
        </div>)} <br></br> */}

        <button onClick={onClickHandler}>{!userLoggedIn ? "LogIn" : "Logout"}</button>
     
      </header>
    </div>
  );
}
export default App;
