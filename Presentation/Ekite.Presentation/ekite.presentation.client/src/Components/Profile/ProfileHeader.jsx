import React, { useContext, useEffect } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";

function ProfileHeader({ profileData }) {
  const { loading } = useContext(ProfileContext);
  const { userRole } = useContext(AuthContext);

  if (loading) {
    return <div>Yükleniyor</div>;
  }

  return (
    <>
      <span className="mask bg-gradient-default opacity-8"></span>
      <div className="container-fluid d-flex align-items-center">
        <div className="row">
          {userRole === "Admin" ? (
            <>
              <div className="col-lg-12">
                <h1 className="display-2 text-white">Admin Panel</h1>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-7 col-md-10">
                <h1 className="display-2 text-white">
                  Merhaba {profileData.fullName},
                </h1>
                <p className="text-white mt-0 mb-5">
                  Yeni bir yılın başlangıcında, sizlere bolca mutluluk, başarı
                  ve sağlık diliyoruz. Hep birlikte geçireceğimiz bu yılda güzel
                  anılar biriktirmenizi ve hedeflerinize ulaşmanızı temenni
                  ediyoruz. Mutlu bir yıl geçirmeniz dileğiyle!
                </p>{" "}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
