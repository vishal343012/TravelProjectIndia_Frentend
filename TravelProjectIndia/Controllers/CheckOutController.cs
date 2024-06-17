using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using static System.Net.WebRequestMethods;

namespace TravelProjectIndia.Controllers
{
	public class CheckOutController : Controller
	{
		private readonly IHttpClientFactory _httpClientFactory;

		public CheckOutController(IHttpClientFactory httpClientFactory)
		{
			_httpClientFactory = httpClientFactory;
		}
		public IActionResult Index()
		{
			return View();
		}

		public async Task<IActionResult> CountryList()
		{
			var apiUrl = "http://nextholidaysinadiaapi.nextholidays.co.in/User/GetCountryList";
			var client = _httpClientFactory.CreateClient();

			try
			{
				var response = await client.GetAsync(apiUrl);

				if (response.IsSuccessStatusCode)
				{
					var responseData = await response.Content.ReadAsStringAsync();
					var countryList = JArray.Parse(responseData);

					return View(countryList);
				}
				else
				{
					// Handle the scenario when the API request is not successful
					ViewBag.ErrorMessage = "Failed to fetch country list.";
					return View("Error");
				}
			}
			catch (HttpRequestException ex)
			{
				// Handle any errors that occur during the HTTP request
				ViewBag.ErrorMessage = $"Request error: {ex.Message}";
				return View("Error");
			}
		}
	}
}
