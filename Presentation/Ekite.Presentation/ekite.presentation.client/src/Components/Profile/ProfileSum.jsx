import React from "react";

const ProfileSum = ({ profileData }) => {

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = new Intl.DateTimeFormat("tr-TR").format(date);
        console.log(profileData)
        return formattedDate;
    }


    return (
        <div className="card m-4">
            <div className="card-header">
                <div className="row align-items-center">
                    <div className="col-8">
                        <h3 className="mb-0">Profil Bilgileri </h3>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <form>
                    <h6 className="heading-small text-muted mb-4">Çalışan Bilgileri</h6>
                    <div className="pl-lg-4">
                        <div className="row">

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-username"
                                    >
                                        İsim
                                    </label>
                                    <label id="input-username" className="form-control">
                                        {profileData.secondName === null ? profileData.firstName : profileData.firstName + " " + profileData.secondName}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-secondName"
                                    >
                                        Soyisim
                                    </label>
                                    <label id="input-username" className="form-control">
                                        {profileData.secondLastName === null ? profileData.lastName : profileData.lastName + " " + profileData.secondLastName}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-last-name"
                                    >
                                        Doğum Tarihi
                                    </label>
                                    <label id="input-last-name" className="form-control">
                                        {formatDate(profileData.birthDate)}
                                    </label>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label
                                        className="form-control-label"
                                        htmlFor="input-last-name"
                                    >
                                        TCKN
                                    </label>
                                    <label id="input-last-name" className="form-control">
                                        {profileData.tcno}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-email">
                                        Doğum Yeri
                                    </label>
                                    <label id="input-email" className="form-control">
                                        {profileData.birthPlace}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-email">
                                        Meslek
                                    </label>
                                    <label id="input-email" className="form-control">
                                        {profileData.jobName}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-email">
                                        Departman Adı
                                    </label>
                                    <label id="input-email" className="form-control">
                                        {profileData.departmentName}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-email">
                                        Şirket Adı
                                    </label>
                                    <label id="input-email" className="form-control">
                                        {profileData.companyName}
                                    </label>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-email">
                                        {profileData.leavingDate===null? "Giriş Tarihi" :"Ayrılış Tarihi"}
                                    </label>
                                    <label id="input-email" className="form-control">
                                        {profileData.leavingDate === null ? formatDate(profileData.hireDate) : formatDate(profileData.leavingDate)}
                                    </label>
                                </div>
                            </div>

                            {/*<div className="col-lg-4">*/}
                            {/*    <div className="form-group">*/}
                            {/*        <label className="form-control-label" htmlFor="input-email">*/}
                            {/*            Ayrılış Tarihi*/}
                            {/*        </label>*/}
                            {/*        <label id="input-email" className="form-control">*/}
                            {/*            {profileData.leavingDate === null ? "-" : formatDate(profileData.leavingDate)}*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                         
                        </div>
                       
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">İletişim Bilgileri</h6>
                    <div className="pl-lg-4">

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-city">
                                        E-mail
                                    </label>
                                    <label id="input-city" className="form-control">
                                        {profileData.email}
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-email">
                                        Telefon Numarası
                                    </label>
                                    <label id="input-email" className="form-control">
                                        {profileData.phoneNumber}
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label className="form-control-label" htmlFor="input-address">
                                        Adres
                                    </label>
                                    <label className="form-control" placeholder="Home Address">
                                        {profileData.address}
                                    </label>
                                </div>
                            </div>
                        </div>
                       

                    </div>
                    <hr className="my-4" />

                </form>
            </div>
        </div>
    );
};

export default ProfileSum;
