// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import AdDetails from './pages/AdDetails/AdDetails'
import SearchAds from './pages/SearchAds/SearchAds'
import LoginRegister from './pages/LoginRegister/LoginRegister'
import UserDashboard from './pages/Dashboard/Dashboard'
import NewAd from './pages/NewAd/NewAd'
import EditAd from './pages/EditAd/EditAd'
import UserSettings from './pages/UserSettings/UserSettings'
import AuthProvider from './hooks/AuthContext'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={ <Home /> }/>
              <Route path="/login" element=  {<LoginRegister />}/>
              <Route path="/ad/:id" element={ <AdDetails /> }/>
              <Route path="/search" element={ <SearchAds /> }/>
              <Route element={ <ProtectedRoutes />}>
                <Route path="/dashboard" element= {<UserDashboard />} />
                <Route path="/settings" element= {<UserSettings />} />
                <Route path="/new" element= {<NewAd />} />
                <Route path="/edit/:id" element= {<EditAd />} />
              </Route>
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
