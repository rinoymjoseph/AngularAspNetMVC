using System.Web;
using System.Web.Mvc;

namespace _5_Angular_PrimeNG_Grid
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
