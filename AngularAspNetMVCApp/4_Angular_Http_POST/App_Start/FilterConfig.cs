using System.Web;
using System.Web.Mvc;

namespace _4_Angular_Http_POST
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
