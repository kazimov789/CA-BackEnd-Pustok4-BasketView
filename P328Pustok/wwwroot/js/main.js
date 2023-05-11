﻿//$(document).on("click", ".modal-btn", function (e) {
//    e.preventDefault();

//    let url = $(this).attr("href");

//    fetch(url)
//        .then(response => {

//            console.log(response)
//            if (response.ok) {
//                return response.text()
//            }
//            else {
//                alert("Bilinmedik bir xeta bas verdi!")
//            }
//        })
//        .then(data => {
//            //$("#quickModal .product-title").text(data.book.name)
//            $("#quickModal .modal-dialog").html(data)
//            $("#quickModal").modal('show');
//        })
//})

$(document).on("click", ".addbasket", function (e) {
    e.preventDefault();
    let url = $(this).attr("href");
    console.log(url)
    fetch(url)
        .then(response => {
            if (!response.ok) {
                alert("xeta bas verdi baskete elave ederken")
            }
            return response.text()
        })
        .then(data => {
            $(".cart-block").html(data)
        })
})

$(document).on("click", ".removefrombasket", function (e) {
    e.preventDefault();
    let url = $(this).attr("href");
    console.log(url)
    fetch(url)
        .then(response => {
            if (!response.ok) {
                alert("xeta bas verdi")
                return
            }
            return response.text()
        })
        .then(data => {
            $(".cart-block").html(data)
        })
})
