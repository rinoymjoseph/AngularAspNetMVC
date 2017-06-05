using System.Web;
using System.Web.Mvc;

namespace _3_Angular_Http_Get
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
