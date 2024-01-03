﻿using AutoMapper;
using Ekite.Application.DTOs.EmployeeDto;
using Ekite.Application.Interfaces.Services;
using Ekite.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Ekite.Presentation.Server.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class EmployeeController : ControllerBase
	{
		private readonly IEmployeeService _employeeService;

		public EmployeeController(IEmployeeService employeeService)
		{
			_employeeService = employeeService;
		}


		[HttpGet("[action]")]
		//[Authorize(Roles ="Admin,Employee")]
		public async Task<IActionResult> GetSummaryPersonel(int id)
		{
			ResultSumEmployeeDto resultSum = await _employeeService.GetSumEmployee(id);

			if (resultSum != null)
			{
				return Ok(resultSum);
			}
			else
			{
				return NotFound("Kişi bulunamadı");
			}
		}

		[HttpGet("[action]")]
        [Authorize(Roles ="Admin,Employee")]
        public async Task<IActionResult> GetDetailPersonel(int id)
		{
			ResultDetailEmployeeDto resultSum = await _employeeService.GetDetailEmployee(id);

			if (id > 0)
			{
				return Ok(resultSum);
			}
			else
			{
				return NotFound("Kişi bulunamadı");
			}

		}

		[HttpPut("GetUpdatePersonel")]
		public async Task<IActionResult> GetUpdatePersonel(int id, UpdateEmployeeDto employeeDto)
		{
			//TODOO FOTO GÜNCELLEMEYİ HALLET
			if (await _employeeService.TUpdate(id, employeeDto))
			{
				return Ok(employeeDto);
			}
			else
			{
				return NotFound("bulunamadı");
			}
		}

	}
}
