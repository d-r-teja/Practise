import { Route, Routes } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  //localhost:3000/path
  return(
  <div>
        <Route path='/'>
          <AllMeetupsPage/>
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage/>
        </Route>
        <Route path='/favorites'>
          <FavoritesPage/>
        </Route>
  </div>
  );
}

export default App;
