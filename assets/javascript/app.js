// console.log("Connected");
var myapi = "osqolqn0f8aj0zXwqVkW3mrMhLnwcwGE";
var limit = 10;
var toonbuttons = ["Homer Simpson", "Futurama"];

function RenderGifs() {
  var toon = $(this).attr("data-name");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    myapi +
    "&q=" +
    toon +
    "&limit=" +
    limit +
    "lang=en";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(Response) {
    for (var i = 0; i < limit; i++) {
      var savegif = $("<button>");
      savegif.text("favorite").addClass("savebtn");
      var toonDiv = $("<div>");
      toonDiv.addClass("gifholder");

      var rating = Response.data[i].rating;
      var ratingp = $("<div class ='toonrating'>").text("Rating: " + rating);
      toonDiv.append(ratingp);
      var gifurl = Response.data[i].images.fixed_width.url;
      var stillurl = Response.data[i].images.fixed_width_still.url;
      //   console.log(gifurl);
      var gifconatiner = $("<img>");
      gifconatiner
        .addClass("figureg")
        .attr("data-state", "animate")
        .attr("data-animate-url", gifurl)
        .attr("data-still-url", stillurl)
        .attr("src", gifurl);

      toonDiv.prepend(gifconatiner);
      toonDiv.append(savegif);
      $("#gifs").prepend(toonDiv);
    }

    console.log(Response);
  });
}

function MakeButtons() {
  $("#buttons").empty();
  for (const key in toonbuttons) {
    var newbutton = $("<button>");
    newbutton.addClass("toon-btn");
    newbutton.attr("data-name", toonbuttons[key]);
    newbutton.text(toonbuttons[key]);

    $("#buttons").prepend(newbutton);
    // $("#toon-input").reset();
    // document.getElementById("toon-intput").reset();
  }
}
function togglepause() {
  console.log("toggle Pause");
  console.log(this);

  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate-url"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still-url"));
    $(this).attr("data-state", "still");
  }
}

$("#add-toon").on("click", function(event) {
  event.preventDefault();
  var toontoadd = $("#toon-input")
    .val()
    .trim();
  console.log(toontoadd);
  if (toontoadd != "") {
    toonbuttons.push(toontoadd);
    $("#toon-input").val("");
    MakeButtons();
  }
});

MakeButtons();

$(document).on("click", ".toon-btn", RenderGifs);
$(document).on("click", ".figureg", togglepause);
