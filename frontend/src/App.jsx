import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './pages/Root'
import Home from './pages/Home'
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import Login from './pages/Login';
import Logup from './pages/Logup';
import {saveTask, getTasks, getPriorities} from './utils/master'

const routes = createBrowserRouter([
  {path: '/', element: <Root/>, children: [
    {index: true, element: <Home/>},
    {path: 'tasks', loader: getTasks, element: <Tasks/>},
    {path: 'newTask',loader: getPriorities, action: saveTask, element: <NewTask/>},
  ]},
  {path: '/login', element: <Login />},
  {path: '/logup', element: <Logup />}
])

const App = () => {
  return <RouterProvider router={routes} />
}

export default App
