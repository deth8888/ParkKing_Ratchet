$(document).ready(function () {

    onDeviceReady();

    function onDeviceReady() {

        alert("search");

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

                alert(JSON.stringify(result));
                strSearch = '';

                $.each(result, function (index, val) {
                    strSearch += '<li class="table-view-cell media">' +
                        '<a class="push-right" href="choose-theater.html" data-transition="slide-in">' +
                        '<h4 class="name">' + val.ParkingName + '</h4>' +
                        '<p class="address">' + val.Address + '</p>' +
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
                var options = {
                    valueNames: ['name', 'address']
                };

                var parkingList = new List('parking-list', options);

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


    }
});