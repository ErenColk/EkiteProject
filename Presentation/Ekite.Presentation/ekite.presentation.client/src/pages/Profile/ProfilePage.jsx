import React, { useContext, useEffect, useState } from "react";
import ProfileDetails from "../../Components/Profile/ProfileDetails";
import ProfileCard from "../../Components/Profile/ProfileCard";
import ProfileHeader from "../../Components/Profile/ProfileHeader";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";

function ProfilePage() {
    const {isAuthenticated} = useContext(AuthContext)
    const {fetchData} = useContext(ProfileContext)
    const { employeeId, setEmployeeId, setIsAuthenticated } =
    useContext(AuthContext);
    const [profileData, setProfileData] = useState(null);



  useEffect(() => {
    if (employeeId !== 0) {
      (async () => {
        console.log("Profil Detayları if kısmı çalıştı", employeeId);
        try {
          let data = await fetchData(employeeId);
          setProfileData(data);
          console.log("Profil Page",data);
        } catch (error) {}
      })();
    } else {
      const storedEmployeeId = localStorage.getItem("employeeId");
      if (storedEmployeeId) {
        console.log("Profil detayları else kısmı useEffect", storedEmployeeId);
        setEmployeeId(parseInt(storedEmployeeId));
        setIsAuthenticated(true);
      }
    }
  }, [employeeId]);



    return (
        <>{profileData ? <div className="main-content" id="panel">
        <div
            className="header pb-6 d-flex align-items-center"
            style={{
                minHeight: "500px",
                backgroundImage: "url(src/assets/img/theme/profile-cover.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center top",
            }}
        >                  
            <ProfileHeader profileData={profileData}/>
        </div>

        <div className="container-fluid mt--6">
            <div className="row">
                <div className="col-xl-4 order-xl-2">
                    <div className="card card-profile">                            
                        <ProfileCard profileData={profileData}/>
                    </div>
                </div>
                <div className="col-xl-8 order-xl-1">                           
                    <ProfileDetails profileData={profileData}/>
                </div>
            </div>                   
        </div>
    </div> : <span>Yükleniyor</span>}
            
        </>
    );
}

export default ProfilePage;
