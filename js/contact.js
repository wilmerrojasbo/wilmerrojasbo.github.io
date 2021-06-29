function sendData(){
    $.getJSON( "../json/contact.json", function( data ) {
        // now data is JSON converted to an object / array for you to use.
        
        var nameContact = $('#name').val();
        var emailContact = $('#email').val();
        var msgContact = $('#message').val();
        
        var newContact = { name: nameContact,
        email: emailContact,
        message: msgContact} // a new contact object
      
        // add a new contact to the set
        data.push(newContact);  
        
        var newData = JSON.stringify(data);
        jQuery.post('../php/save_to_json.php', {
            newData: newData
        }, function(response){
            // response could contain the url of the newly saved file
        }).done(function() {
            alert( "second success" );
        })
    });
}