import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from './Components/Main/Main'
import PostView from './Components/Post/PostView';
import Photo from './Components/Photo/Photo';
import Contacts from './Components/ContactsBook/Contacts/Contacts';
import Nav from './Components/Nav/Nav';


function App() {
  return (
    <Router>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/post" element={<PostView />}/>
          <Route path="/photo" element={<Photo />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
