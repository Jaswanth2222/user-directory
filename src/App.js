import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div>
      
    </div>
      
  );
}

export default App;

export const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element : <Body />
    },
    {
      path: "/user/:id",
      element : <UserDetails />
    }
  ]
)
