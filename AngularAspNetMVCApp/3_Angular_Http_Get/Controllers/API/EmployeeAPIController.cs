using _3_Angular_Http_Get.Models;
using Codify.DataAccess;
using Codify.DataAccess.Employee.Repository;
using Codify.DataAccess.Employee.Repository.Interface;
using Codify.Entity.Employee;
using System.Collections.Generic;
using System.Web.Http;

namespace _3_Angular_Http_Get.Controllers.API
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

        [HttpGet]
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
