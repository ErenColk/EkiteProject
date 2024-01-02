//import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Pages/Profile/Profile";
import LoginPage from "./Pages/Login/LoginPage";
//import LoginPage from "./Pages/Login/LoginPage";


import EditProfile from './Pages/EditProfile/EditProfile';
import "./App.css";
import { ProfileProvider } from './context/ProfileContext';



function App() {
    return (
        <div>
            <Navbar />
            <Sidebar />
      


            <AuthProvider>
                {/*<LoginPage />*/}
                <BrowserRouter>
                    <Routes>

                        <ProfileProvider>
                            <Route path="/Profile" element={<Profile />} />
                        </ProfileProvider>

                        <Route path="/EditProfile" element={<EditProfile />} />

                    </Routes>
                </BrowserRouter>
              
                
               

                <Footer />

            </AuthProvider>

        </div>
    );

    //async function populateWeatherData() {
    //    const response = await fetch("weatherforecast");
    //    const data = await response.json();
    //}
}

export default App;
