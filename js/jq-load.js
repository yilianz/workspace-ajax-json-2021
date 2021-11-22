

$("nav a").click(function(e) {
  e.preventDefault(); // Stop loading new link

  $("nav a.current").removeClass("current"); // Clear current indicator
  $(this).addClass("current"); // New current indicator
  $("#container").remove();

  //var rootPath = @URL.Content("~")

  var url = $(this).attr("href");
  $("#content")
    .load(url + " #container", function(response, status, xhr) {
      console.log(status);
      console.log(xhr.statusText);
      console.log(response);
    })
    .hide()
    .fadeIn(2000);
});

/*
 
 $('nav a').on('click', function(e) {                 // User clicks nav link
 e.preventDefault();                                // Stop loading new link
 var url = this.href;                               // Get value of href
 
 $('nav a.current').removeClass('current');         // Clear current indicator
 $(this).addClass('current');                       // New current indicator
 
 $('#container').remove();                          // Remove old content
 $('#content').load(url + ' #container').hide().fadeIn('slow'); // New content
 });
 
 */
