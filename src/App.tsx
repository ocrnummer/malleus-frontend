import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import AdDetails from './pages/AdDetails/AdDetails'
import SearchAds from './pages/SearchAds/SearchAds'
import Login from './pages/LoginRegister/Login'
import Register from './pages/LoginRegister/Register'
import UserDashboard from './pages/Dashboard/Dashboard'
import NewAd from './pages/NewAd/NewAd'
import EditAd from './pages/EditAd/EditAd'
import UserSettings from './pages/UserSettings/UserSettings'
import AuthProvider from './hooks/useAuth'
import { NAV_AD_ID_URL, NAV_BASE_URL, NAV_DASHBOARD_URL, NAV_EDIT_ID_URL, NAV_LOGIN_REGISTER_URL, NAV_LOGIN_URL, NAV_NEW_URL, NAV_SEARCH_URL, NAV_SETTINGS_URL } from './utils/SharedConts'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
              <Route path={NAV_BASE_URL} element={ <Home /> }/>
              <Route path={NAV_LOGIN_URL} element=  {<Login />}/>
              <Route path={NAV_LOGIN_REGISTER_URL} element=  {<Register />}/>
              <Route path={NAV_AD_ID_URL} element={ <AdDetails /> }/>
              <Route path={NAV_SEARCH_URL} element={ <SearchAds /> }/>
              <Route element={ <ProtectedRoutes />}>
                <Route path={NAV_DASHBOARD_URL} element={ <UserDashboard />} />
                <Route path={NAV_SETTINGS_URL} element={ <UserSettings />} />
                <Route path={NAV_NEW_URL} element={ <NewAd />} />
                <Route path={NAV_EDIT_ID_URL} element={ <EditAd />} />
              </Route>
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
