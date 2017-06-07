using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace _4_Angular_Http_POST.Models
{
    public class EmployeeModel
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}