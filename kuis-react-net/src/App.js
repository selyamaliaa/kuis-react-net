import './App.css';
import {Button} from './components/Button';
import Welcome from './components/Welcome';

function App() {
  let user="Sely";
  return (
    !user ? <Button/> : <Welcome name={user}/>
  )
}

export default App;
