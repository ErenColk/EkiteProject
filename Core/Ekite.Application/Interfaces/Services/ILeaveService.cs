﻿using Ekite.Application.DTOs.LeaveDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.Interfaces.Services
{
    public interface ILeaveService
    {
        Task<bool> TCreate(CreateLeaveDTO createLeaveDTO);
        Task<List<ResultLeaveDTO>> GetAllLeaveList(int employeeId);

        Task<bool> THardDelete(int id);

        Task<bool> TUpdate(UpdateLeaveDTO updateLeaveDTO);

        Task<UpdateLeaveDTO> GetLeaveById(int leaveId);
    }
}
