﻿using AutoMapper;
using Ekite.Application.DTOs.LeaveDto;
using Ekite.Application.Helpers;
using Ekite.Application.Interfaces.IRepositories;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Ekite.Domain.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Persistence.Concrete.Managers
{
    public class LeaveManager : ILeaveService
    {
        private readonly ILeaveRepository leaveRepository;
        private readonly IEmployeeRepository employeeRepository;
        private readonly IMapper mapper;

        public LeaveManager(ILeaveRepository leaveRepository, IEmployeeRepository employeeRepository, IMapper mapper)
        {
            this.leaveRepository = leaveRepository;
            this.employeeRepository = employeeRepository;
            this.mapper = mapper;
        }

        public async Task<List<ResultLeaveDTO>> GetAllLeaveList(int employeeId)
        {
            if (employeeId <= 0)
            {
                return null;
            }
            else
            {
                List<ResultLeaveDTO> result = await leaveRepository.GetFilteredList(
                select: x => new ResultLeaveDTO
                {
                    Id = x.Id,
                    Day = x.Day,
                    ApprovalStatus = EnumDescriber.Description(x.ApprovalStatus),
                    LeaveType = EnumDescriber.Description(x.LeaveType),
                    CreatedDate = x.CreatedDate,
                    UpdatedDate = x.UpdatedDate,
                    ApprovedDate = x.ApprovedDate,
                    LeaveEndDate = x.LeaveEndDate,
                    LeaveStartDate = x.LeaveStartDate,
                },
                where: x => x.EmployeeId == employeeId);

                return result;
            }

        }

        public async Task<UpdateLeaveDTO> GetLeaveById(int leaveId)
        {
            UpdateLeaveDTO updateLeaveDTO = await leaveRepository.GetFilteredFirstOrDefault(
                select: x => new UpdateLeaveDTO
                {
                    Id = x.Id,
                    LeaveStartDate = x.LeaveStartDate,
                    LeaveEndDate = x.LeaveEndDate,
                    LeaveType = x.LeaveType,
                },
                where: x => x.Id == leaveId
                );
            return updateLeaveDTO;
        }

        public async Task<bool> TCreate(CreateLeaveDTO createLeaveDTO)
        {

            Employee employee = await employeeRepository.GetById(createLeaveDTO.EmployeeId);
            if (employee == null)
            {
                return false;
            }
            else
            {
                
                Leave leave = mapper.Map<Leave>(createLeaveDTO);
                leave.ApprovalStatus = ApprovalStatus.Pending;

                return await leaveRepository.Create(leave);
            }

        }

        public async Task<bool> THardDelete(int id)
        {
            if (id > 0)
            {

                Leave leave = await leaveRepository.GetByExpression(x => x.Id == id && x.ApprovalStatus == ApprovalStatus.Pending);
                if (leave == null)
                {
                    return false;
                }
                else
                {
                    return await leaveRepository.HardDelete(leave);
                }

            }
            else
            {
                return false;
            }

        }

        public async Task<bool> TUpdate(UpdateLeaveDTO updateLeaveDTO)
        {
            Leave leave = await leaveRepository.GetById(updateLeaveDTO.Id);
            if(leave == null)
            {
                return false;
            }
            else
            {
                leave = mapper.Map(updateLeaveDTO, leave);
                return await leaveRepository.Update(leave);
            }
        }
    }
}
