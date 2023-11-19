import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import User from './components/user';
import Profile from './components/user/Profile';
import Addplace from './components/admin/Addplace';
import Signup from './components/main/Signup';
import { Service } from './components/main/Service';
import ContactUs from './components/main/ContactUs';
import About from './components/main/About';
import BrowsePlace from './components/main/BrowsePlace';
import ViewPlace from './components/main/ViewPlace';
import ManageBooking from './components/user/ManageBooking';
import CheckOut from './components/user/CheckOut';
import Manageplace from './components/admin/Manageplace';
import ManageUser from './components/admin/ManageUser';
import { AppProvider } from './context/AppContext';
import Admin from './components/admin';

function App() {

  return (
    <>
      <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path='main' element={<Main />} >
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup/>} />
            <Route path='contactus' element={<ContactUs />} />
            <Route path='about' element={<About />} />
            <Route path='service' element={<Service />} />
            <Route path='browseplace' element={<BrowsePlace />} />
            <Route path='viewplace' element={<ViewPlace/>} />
          </Route>

          <Route path='user' element={<User />}>
            <Route path='profile' element={<Profile />} />
            <Route path='managebooking' element={<ManageBooking />} />
            <Route path='checkout' element={<CheckOut/>} />
          </Route>

          <Route path='admin' element={<Admin />}>
            <Route path='addplace' element={<Addplace />} />
            <Route path='manageplace' element={<Manageplace/>} />
            <Route path='manageuser' element={<ManageUser />} />
          </Route>

        </Routes>
        </AppProvider>
      </BrowserRouter>

    </>
  )
}

export default App
