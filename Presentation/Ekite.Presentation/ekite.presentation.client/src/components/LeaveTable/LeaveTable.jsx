import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LeaveContext } from "../../context/LeaveContext";
import { useNavigate } from "react-router-dom";

const LeaveTable = ({ leaveList }) => {
  const { employeeId } = useContext(AuthContext);
  const { deleteLeave,setUpdateLeaveId,updateLeaveId} = useContext(LeaveContext);
  const navigate = useNavigate()

  useEffect(() => {
    console.log("Leave Table çalıştı.", leaveList);
  }, []);

  const handleDeleteLeave = async (leaveId) => {
    try {
      let data = await deleteLeave(leaveId);
      console.log(data);
    } catch (error) {}
  };

  const handleUpdateLeave = async (leaveId) => {
    setUpdateLeaveId(leaveId)
    navigate("/updateLeave")
  }

  return (
    <div className="table-responsive">
      {leaveList && (
        <table className="table align-items-center table-dark table-flush">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="sort" data-sort="budget">
                İzin Türü
              </th>
              <th scope="col" className="sort" data-sort="name">
                Gün
              </th>
              <th scope="col" className="sort" data-sort="status">
                Onay Durumu
              </th>
              <th scope="col" className="sort" data-sort="completion">
                İzin Başlangıç Tarihi
              </th>
              <th scope="col" className="sort" data-sort="completion">
                İzin Bitiş Tarihi
              </th>
              <th scope="col" className="sort" data-sort="completion">
                Talep Edilme Tarihi
              </th>
              <th scope="col" className="sort" data-sort="completion">
                Onaylanma Tarihi
              </th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="list">
            {leaveList.map((leave, index) => (
              <tr key={index}>
                <td className="budget">{leave.leaveType}</td>
                <th scope="row">{leave.day}</th>
                <td>
                  <span className="badge badge-dot mr-4">
                    <i className="bg-warning"></i>
                    <span className="status">{leave.approvalStatus}</span>
                  </span>
                </td>
                <td>{leave.leaveStartDate}</td>
                <td>{leave.leaveEndDate}</td>
                <td>{leave.createdDate}</td>
                <td>{leave.approvedDate}</td>
                {leave.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right">
                    <a
                      className="btn btn-outline-primary"
                     onClick={() => handleUpdateLeave(leave.id)}
                    >
                      Güncelle
                    </a>
                  </td>
                ) : (
                  <td></td>
                )}
                {leave.approvalStatus === "Bekleniyor" ? (
                  <td className="text-right">
                    <a
                      className="btn btn-outline-danger"
                      onClick={() => handleDeleteLeave(leave.id)}
                    >
                      Sil
                    </a>
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaveTable;
