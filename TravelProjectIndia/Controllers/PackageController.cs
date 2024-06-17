using Microsoft.AspNetCore.Mvc;

namespace TravelProjectIndia.Controllers
{
    public class PackageController : Controller
    {
        public IActionResult PackageDetail()
        {
            return View();
        }

		public IActionResult PackageList()
		{
			return View();
		}
	}
}
