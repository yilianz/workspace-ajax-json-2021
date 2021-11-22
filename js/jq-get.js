var keys = '<p id="keys">Answer</p>';
$("#content").append(keys);

var remoteaddr =
  "https://us-central1-airesponse-1308f.cloudfunctions.net/addMessage";

$("#clickcheck").blur(function() {
  // get the file and append the data
  var requestData = "message=" + $("#mesg").val();

  $.get(remoteaddr, requestData)
    .done(function() {})
    .fail(function() {
      alert("get request failed"); //data will still be saved
    });
});
