﻿using Ekite.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Ekite.Application.VMs.EmployeeVM
{
    public class ResultSumEmployeeVM
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string? FullName { get { return (SecondName != null ? (FirstName + " " + SecondName) : FirstName) + " " + (SecondLastName != null ? (LastName + " " + SecondLastName) : (LastName));}}
        public string? SecondName { get; set; }
        public string? SecondLastName { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string JobName { get; set; }
        public string DepartmentName { get; set; }
    }
}
