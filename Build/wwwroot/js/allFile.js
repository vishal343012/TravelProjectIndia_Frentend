//var CountryList
//        $(document).ready(function () {
//            CountryList = [];

//            var data = AjaxCallGet('/api/APITourSearch/GetCountryList');
//            CountryList = data;
//            var CountryHTML = "<option value=''>Select Country</option>";
//            var MobileHTML = "<option value=''>+0 (Country Code)</option>";
//            for (var i = 0; i < CountryList.length; i++) {
//                CountryHTML += "<option value='" + CountryList[i].ID + "'>" + CountryList[i].Name + "</option>";
//                MobileHTML += "<option value='" + CountryList[i].MobileCode + "'>+" + CountryList[i].MobileCode + " (" + CountryList[i].Name + ")</option>";
//            }
//            $("#CountryId").html(CountryHTML);
//            $("#CountryCode").html(MobileHTML);

//            GetCities();
//            $('#CountryId').select2();
//            $('#CountryCode').select2();
//            $('#CityId').select2();
//            $('form').validate();
//            $('#submit').on('click', function (event) {
//                event.preventDefault();
//                if ($('form').valid()) {

//                    var data = AjaxCallPost('/api/APIUser/RegisterUser', {
//                        FirstName: $("#firstname").val(),
//                        LastName: $("#lastname").val(),
//                        Gender: $("#gender").val(),
//                        EmailId: $("#emailaddress").val(),
//                        CountryCode: $("#CountryCode").val(),
//                        MobileNumber: $("#MobileNumber").val(),
//                        CountryId: $("#CountryId").val(),
//                        CityId: $("#CityId").val(),
//                        Password: $("#password").val(),
//                        DOB: $("#dob").val(),
//                        HearAboutUs: $('#HearAboutUs').val() == "Other" ? $('#HearAboutUsText').val() : $('#HearAboutUs').val(),
//                    });
//                    if (data.Status == 2)
//                        window.location.href = "/Home/Verification?id=" + data.Message;
//                    if (data.Status == 1) {
//                        alert("Account Created Successfully");
//                        window.location.href = "/";
//                    }
//                    if (data.Status == 0)
//                        OpenAlert(data.Message);
//                }
//            });
//            $('#HearAboutUs').on('change', function () {
//                if (this.value == "Other") {
//                    $("#HearAboutUsDiv").removeClass("hide");
//                    $("#HearAboutUsText").addClass("required");
//                }
//                else {
//                    $("#HearAboutUsDiv").addClass("hide");
//                    $("#HearAboutUsText").removeClass("required");
//                }
//            });
//            $('#dob').datepicker({
//                dateFormat: 'dd-M-yy',
//                changeMonth: true,
//                changeYear: true,
//                maxDate: '-0',
//                yearRange: '-99:-0',
//                inline: true
//            });
//        });
//        function GetCities() {
//            var CityList = [];
//            if ($("#CountryId").val() != '') {

//                var data = AjaxCallGet('/api/APITourSearch/GetCityList?CountryId=' + $("#CountryId").val());
//                CityList = data;
//            }
//            var CityHTML = "<option value=''>Select City</option>";
//            for (var i = 0; i < CityList.length; i++) {
//                CityHTML += "<option value='" + CityList[i].ID + "'>" + CityList[i].Name + "</option>";
//            }
//            $("#CityId").html(CityHTML);
//            for (var i = 0; i < CountryList.length; i++) {
//                if (CountryList[i].ID == $("#CountryId").val()) {
//                    $('#CountryCode').val(CountryList[i].MobileCode).trigger('change')
//                }
//            }
//        }