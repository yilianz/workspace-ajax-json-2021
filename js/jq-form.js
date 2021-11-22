

// append a new paragraph

$('div#wrapper').append('<p id="result"></p>');

// get all the form data 
$('form').submit(function(event){
    //no default behavior
    event.preventDefault();
    var formdata = $(this).serialize();
    $("p#result").html(formdata);
    
    //json like data
    var jsondata=$(this).serializeArray();
    $.each(jsondata,function(key,value){
        var str = "<br>"+key+":";
        $.each(value, function(k,v){str +=k+"->"+v+","});
        str +="</br>";
        $("p#result").append(str);
    });
    
    var jsonstring = JSON.stringify(jsondata);
    console.log(jsonstring);
    
    //send jsonstring to php file
    $.post('http://129.252.199.45/~dummy/phpproject/json.php',{'json':jsonstring})
            .done(function(data){
                $("p#result").append(data);
            }); 
    
});