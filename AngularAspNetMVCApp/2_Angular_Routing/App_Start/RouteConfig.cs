using System.Web.Mvc;
using System.Web.Routing;

namespace _2_Angular_Routing
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                 constraints: new { controller = "Home" }
            );

            routes.MapRoute(
              name: "Angular_Default",
              url: "{*url}",
                defaults: new { controller = "Home", action = "Index" }
              );
        }
    }
}
