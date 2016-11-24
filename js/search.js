$(document).ready(function () {

    onDeviceReady();

    function onDeviceReady() {

        //alert("search");

        //load list api

        $.ajax({
            url: "http://superprogrammer.tech/mobile_api.php",
            type: "GET",
            dataType: "json",
            data: {
                type: "list"
            },
            ContentType: "application/json",
            success: function (result) {

                //alert(JSON.stringify(result));
                strSearch = '';

                $.each(result, function (index, val) {
                    strSearch += '<li class="table-view-cell media">' +
                        '<a class="seeMap">' +
                        '<h4 class="name">' + val.ParkingName + '</h4>' +
                        '<p class="address">' + val.Address + '</p>' +
                        '<p class="lat" style="display:none">' + val.Lat + '</p>' +
                        '<p class="lng" style="display:none">' + val.Lng + '</p>' +
                        '</a>'
                    '</li>'
                    //                    detail += "<tr><td style='display:none'>" + val.id + "</td><td>" + ctr + "</td><td>" +
                    //                        "<b><i>" + val.ItemCode + "</i></b></td>" +
                    //                        "<td><b>" + val.Description + "</b></td>" +
                    //                        "<td><b>" + val.Qty + "</b></td>" +
                    //                        "<td><input class='" + ctr + "' type='number' value=" + val.ActQty + " min='0' max='" + val.Qty + "' readonly id='qty" + ctr + "'></td>" +
                    //                        "<td><input class='" + ctr + "' type='number' value=" + val.Price + " min='1' max='100000' readonly ></td>" +
                    //                        "<td><button id='" + ctr + "' class='btnEdit'><span class='glyphicon glyphicon-pencil'></span>&nbsp;&nbsp;Edit</button></td></tr>";
                    //                  
                });
                $("#ul-search").append(strSearch);

                //search list
                var options = {
                    valueNames: ['name', 'address']
                };

                var parkingList = new List('parking-list', options);

                $(".seeMap").click(function () {
                    var parkingName = "";
                    var address = "";
                    var lat = 0.000000;
                    var lng = 0.000000;

                    parkingName = $(this).find('.name').text();
                    address = $(this).find('.address').text();
                    lat = parseFloat($(this).find('.lat').text()).toFixed(6);
                    lng = parseFloat($(this).find('.lng').text()).toFixed(6);

                    alert(lat)
                    alert(lng)

                    window.sessionStorage.setItem("parkingName", parkingName);
                    window.sessionStorage.setItem("address", address);
                    window.sessionStorage.setItem("lat", lat);
                    window.sessionStorage.setItem("lng", lng);

                    window.location = "map.html";
                })



            },
            error: function (err) {
                swal("Oops!", "Something went wrong. Please try again!", "error"),
                    function (isConfirm) {
                        if (isConfirm) {
                            window.location = "search.html"; //Redirection
                        }
                    }


            }
        })



        //        function mapPage() {
        //            alert($(this).find('.name').val());
        //
        //

        //            //            window.location = "map.html";
        //        }
    }
});