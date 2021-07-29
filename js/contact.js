var firebaseConfig = {
    apiKey: "AIzaSyBsXlsJM2vazIWTgl1ePf7Fm01y1iq-IVg",
    authDomain: "contacto-b1b19.firebaseapp.com",
    projectId: "contacto-b1b19",
    storageBucket: "contacto-b1b19.appspot.com",
    messagingSenderId: "655036988798",
    appId: "1:655036988798:web:38ecc0248136da36b4072f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var contactMsgRef = firebase.database().ref('contact_messages');

  document.getElementById('contact-form').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();
    
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    var d = new Date();
    
    var name = getInputValue('name');
    var email = getInputValue('email');
    var message = getInputValue('message');
    var date = d.toLocaleString('en-US',options);;
    
    if(validateField(name,email,message)){
        if(ValidateEmail(email)){
            if(verifyNoLink(message)){
                saveMessage(name, email, message, date);
            }else{
                showAlert('alerta-link');
            }
        }else{
            showAlert('alerta-email');
        }
    }else{
        showAlert("alerta-warning");
    }
    
    /*if(ValidateEmail(email)){
        console.log("Email Correcto");
    }else{
        console.log("Email no valido");
    }*/
    //saveMessage(name, email, message, date);
  }

  function getInputValue(id){
      return document.getElementById(id).value;
  }

  function saveMessage(name, email, message, date){
    var newContactMsgRef = contactMsgRef.push();

    newContactMsgRef.set({
        name : name,
        email : email,
        message : message,
        date : date
    }).then(()=>{
        //document.getElementById("alerta").style.display = 'block';
        showAlert("alerta");
        clearForm('name');
        clearForm('email');
        clearForm('message');
        /*setTimeout(function(){
            document.getElementById("alerta").style.display = 'none';
        }, 5000);*/
    });

  }

  function showAlert(id){
    document.getElementById(id).style.display = 'block';
    setTimeout(function(){
        document.getElementById(id).style.display = 'none';
    }, 5000);
  }

  function clearForm(id){
      document.getElementById(id).value = "";
  }

  function ValidateEmail(mail) 
  {
   if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
      return (true)
    }
      //alert("You have entered an invalid email address!")
      return (false)
  }  

  function verifyNoLink(message){
      if(message.includes('https://')|| message.includes('http://')){
          return (false)
      }else{
       return (true)
      }
  }

  function validateField(name, email, message){
      if(name.length <= 3 || email.length <= 5 || message.length <= 10){
        return (false)
      }else{
          return (true)
      }
  }
