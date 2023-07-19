import logo from './logo.svg';
import './App.css';
import UserProfile, {UserRoles} from './components/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <h1>Hello World!</h1>

        <UserProfile/>
        <span>
        {UserRoles.ADMIN} 
        {' '}
        {UserRoles.USER}
        </span>
        
     
      </header>
    </div>
  );
}


export default App;
