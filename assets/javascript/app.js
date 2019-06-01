$(document).ready(function () {
    //var favList = [];
    var search = null;
    var newSearch = function () {
        event.preventDefault();
        search = $("#game-search").val().trim();
        //localStorage.clear();
        //localStorage.setItem("searchlist", JSON.stringify(resultList));
        $("#game-search").val("");
    };


    // This function logs the click of the "search" button and captures the text searched
    $("#game-query").on("click", function (event) {
        event.preventDefault();
        console.log(event);
        var game = $("#game-search").val().trim();
        console.log(game);
    })

    var searchGame = function (term) {
        //need to change url
        var queryURL = "https://api-endpoint.igdb.com/games/?search=" + term;
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'user-key': "e6c34e7d53f0cca95d5ac8812e0d1ca7"
            },
            data: "fields *; search " + term + "; limit 10;"
        }).then(function (response) {
            if (response.data != null) {
                for (var i = 0; i < 10; i++) {
                    //this div containts everything
                    var itemDiv = $("<div>");
                    itemDiv.addClass("itemId");
                    itemDiv.attr("id", response.data[i].title);
                    //this div is image
                    var imageBody = $("<img>");
                    imageBody.addClass("imageBody");
                    imageBody.attr("id", term + i);
                    imageBody.attr("src", response.data[i].image);
                    var title = $("<div>");
                    title.addClass("title");
                    title.text(response.data[i].title);
                    var description = $("<div>");
                    description.addClass("description");
                    description.text();
                    var rating = $("<div>");
                    rating.addClass("rating");
                    rating.text(response.data[i].rating);
                    var price = $("<div>");
                    price.addClass("price");
                    price.text(response.data[i].price);
                    var linkVideo = $("<div>");
                    linkVideo.addClass("linkVideo");
                    linkVideo.text("link");
                    var linkAmz = $("<div>");
                    linkAmz.addClass("linkVideo");
                    linkAmz.text("link");
                    //gifDiv.append(t);
                    $("#resultList").append(gifDiv);
                    console.log(response);
                }
            };
        });
    }
    $("#game-query").on("click", function () {
        if ($("#game-search").val() != "") {
            newSearch();
            searchGame(search);
        };
    });
});


