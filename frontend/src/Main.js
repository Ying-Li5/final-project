import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import { Home } from './Pages/Home'
import { User } from './Pages/User'
import { Game } from './Pages/Game'

ReactDOM.render((
  <BrowserRouter>
    <App />
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/game' element={<Game />} />
  </BrowserRouter>
), document.getElementById('root'))