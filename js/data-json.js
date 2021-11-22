$.getJSON('data/my.json', function (rates) {
  $.each(rates, function (key, value) {
    console.log(key);
    console.log(value);
  });
});
