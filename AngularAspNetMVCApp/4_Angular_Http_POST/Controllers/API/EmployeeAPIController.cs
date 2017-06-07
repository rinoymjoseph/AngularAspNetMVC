using _4_Angular_Http_POST.Models;
using Codify.DataAccess;
using Codify.DataAccess.Employee.Repository;
using Codify.DataAccess.Employee.Repository.Interface;
using Codify.Entity.Employee;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace _4_Angular_Http_POST.Controllers.API
{
    [Route("EmployeeService")]
    public class EmployeeAPIController : ApiController
    {
        [Route("EmployeeService")]
        [HttpGet]
        public string Info()
        {
            return "This is EmployeeService";
        }

        [System.Web.Http.HttpGet]
        [Route("EmployeeService/GetAllEmployees")]
        public IHttpActionResult GetAllEmployees()
        {
            IEmployeeRepository employeeRepo = new EmployeeRepository(new CodifyDataContext());
            List<EmployeeModel> employeeModelList = new List<EmployeeModel>();
            List<EmployeeEntity> employeeEntityList = employeeRepo.GetAllEmployees();

            if (employeeEntityList != null && employeeEntityList.Count > 0)
            {
                foreach (EmployeeEntity empEntity in employeeEntityList)
                {
                    EmployeeModel empModel = new EmployeeModel();
                    empModel.Address = empEntity.Address;
                    empModel.City = empEntity.City;
                    empModel.Country = empEntity.Country;
                    empModel.FirstName = empEntity.FirstName;
                    empModel.LastName = empEntity.LastName;
                    empModel.EmployeeId = empEntity.Id;
                    employeeModelList.Add(empModel);
                }
            }
            return Ok(employeeModelList);
        }
    }
}
