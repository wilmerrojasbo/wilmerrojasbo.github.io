$('#img-logo').animate({
    width:'10vw',
    height:'10vw'
}, 1000);
$('#list-home').click(function(){
    $('#pgb').animate({
        width:'0%'
    });
});
$('#list-about').click(function(){
    $('#pgb').animate({
        width:'33.3%'
    });
});
$('#list-portfolio').click(function(){
    $('#pgb').animate({
        width:'66.6%'
    });
});
$('#list-contact').click(function(){
    $('#pgb').animate({
        width:'100%'
    });
});
$('#btn-work').click(function(){
    $('#pgb').animate({
        width:'66.6%'
    });
});
$(document).on("scroll", function(){
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;

    $("div#pgb").css("width", progress + "%");
    
});

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.pro-skill .progress .progress-bar').animate({
    width:'100%'
}, 1000);

window.sr = ScrollReveal();
sr.reveal('.navbar',{
    duration: 2000,
    origin: 'left'
});
sr.reveal('.home-text',{
    duration: 2000,
    origin: 'top'
});
sr.reveal('#btn-work',{
    duration: 2000,
    origin: 'right',
    distance: '300px',
    delay: 500
});
sr.reveal('.title-about',{
    duration: 1000,
    origin: 'top',
    distance: '100px'
});
sr.reveal('.div-dev',{
    duration: 2000,
    origin: 'left',
    distance: '100px',
    delay: 1000
});
sr.reveal('.div-design',{
    duration: 2000,
    origin: 'top',
    delay: 1000
});
sr.reveal('.div-supp',{
    duration: 2000,
    origin: 'right',
    distance: '100px',
    delay: 1000
});
sr.reveal('#logo-about',{
    duration: 2000,
    origin: 'left',
    distance: '100px',
    delay: 2000
});
sr.reveal('.text-lema',{
    duration: 2000,
    origin: 'left',
    distance: '100px',
    delay: 2000
});
sr.reveal('.card',{
    duration: 2000,
    origin: 'right',
    distance: '100px',
    delay: 2000
});
sr.reveal('.p-about',{
    duration: 2000,
    origin: 'bottom',
    delay: 2000
});

sr.reveal('.title-portfolio',{
    duration: 1000,
    origin: 'top',
    distance: '100px'
});

sr.reveal('.project-1',{
    duration: 500,
    origin: 'bottom',
    distance: '100px',
    delay: 1000
});

sr.reveal('.project-2',{
    duration: 500,
    origin: 'bottom',
    distance: '100px',
    delay: 1500
});

sr.reveal('.project-3',{
    duration: 500,
    origin: 'bottom',
    distance: '100px',
    delay: 2000
});   

sr.reveal('.project-4',{
    duration: 500,
    origin: 'bottom',
    distance: '100px',
    delay: 2500
}); 

var dictionary = {
    'menu-about':{
        'es':'AcercaDe();',
        'en':'About();'
    },
    'menu-portfolio':{
        'es':'Portafolio();',
        'en':'Portfolio();'
    },
    'menu-contact':{
        'es':'Contacto();',
        'en':'Contact();'
    },    
    'greet': {
        'es': 'Hola, soy <span class="highlight">Wilmer Rojas</span>',
        'en': 'Hello, I am <span class="highlight">Wilmer Rojas</span>'
    },
    'ocupation':{
        'es': 'Ingeniero en Computación.',
        'en': 'I\'m a Computer Engineer.'
    },
    'btn-work':{
        'es':'Mi Trabajo',
        'en': 'My Work'
    },
    'about':{
        'es': '<h3>AcercaDe(</h3><h3 style="color: #ac4c1e;">\'Wilmer Rojas\'</h3><h3>);</h3>',
        'en': '<h3>About(</h3><h3 style="color: #ac4c1e;">\'Wilmer Rojas\'</h3><h3>);</h3>'
    },
    'development':{
        'es':'Desarrollo',
        'en':'Development'
    },
    'design':{
        'es': 'Diseño',
        'en': 'Design'
    },
    'tech-support':{
        'es': 'Soporte Técnico',
        'en': 'Tech Support'
    },
    'lema':{
        'es': 'Codificando tus ideas.',
        'en': 'Codifying your ideas.'
    },
    'text-about':{
        'es': 'Soy Ingeniero en Computación, he trabajado en diseño y desarrollado de sitios web y aplicaciones android,'+ 
        'también eh brindado servicios de soporte y/o consultor informático. Siempre eh tenido un gran interes en aprender nuevas tecnologías'+ 
        'y en crear interfaces de usuario dinámicas e intuitivas.',
        'en': 'I am a Computer Engineer, I have worked in design and development of websites and android applications,'+ 
        'I have also provided support services and / or computer consultant. I\'ve always had a great interest in learning new technologies'+ 
        'and creating dynamic and intuitive user interfaces.'
    },
    'portfolio':{
        'es':'<h3>Portafolio(</h3><h3 style="color: #ac4c1e;">\'Proyectos\'</h3><h3>);</h3>',
        'en':'<h3>Portfolio(</h3><h3 style="color: #ac4c1e;">\'Projects\'</h3><h3>);</h3>'
    },
    'visit-text':{
        'es': 'Visitar el sitio <i class="fas fa-external-link-square-alt"></i>',
        'en': 'Visit the Site <i class="fas fa-external-link-square-alt"></i>'
    },
    'details':{
        'es': 'Detalles',
        'en': 'Details'
    },
    'p-project-1':{
        'es': 'La firma de abogados MGB Legal, requería un rediseño de su sitio web, '+
        'utilizando HTML, PHP, CSS, JavaScript y WordPress. También se realizó el '+ 
        'diseño y desarrollo de una aplicación que consta de dos partes, la primera '+
        'se basa en recibir y enviar correos de la firma, la segunda parte cumple '+
        'con la función de consultar, responder o eliminar comentarios de su página web. '+
        'Esta aplicación fue programada utilizando Android Studio, JavaMail y Firebase.',
        'en': 'The law firm MGB Legal, required a redesign of their website, '+
        'using HTML, PHP, CSS, JavaScript and WordPress. We also performed the '+
        'design and development of an application that consists of two parts, the first one is based on receiving and sending '+
        'emails from the firm, the second part fulfills the function of consulting, answering or '+
        'the function of consulting, replying or deleting comments on its website. '+
        'This application was programmed using Android Studio, JavaMail and Firebase.'
    },
    'read-more':{
        'es': 'Ver Más',
        'en': 'Read More'
    },
    'p-project-2':{
        'es': 'Diseñé y desarrollé una aplicación móvil en la que el cliente requería'+
        ' que sus usuarios pudieran llevar un control de su presión arterial y glucosa.'+
        ' Cuando un paciente registra un dato de presión arterial o glucosa alta, la aplicación'+
        ' automáticamente notifica a un médico de internista a domicilio mediante correo.'+
        ' También tiene la función de agendar una cita con los doctores de Internista a Domicilio'+
        ' e incluye una sección de compras donde los usuarios pueden adquirir los productos que la'+
        ' empresa ofrece. Esta aplicación fue desarrollada usando Android Studio, el diseño del prototipo'+
        ' se hizo usando InVision Studio, el manejo de la base de datos y la autenticación de los usuarios'+
        ' se hizo con la plataforma Firebase.',
        'en': 'I designed and developed a mobile application in which the client required'+
        ' that its users could keep track of their blood pressure and glucose. When a patient'+
        ' registers a high blood pressure or glucose, the application automatically notifies a'+
        ' home internist doctor via email. It also has the function of scheduling an appointment'+
        ' with Internista a Domicilio doctors and includes a shopping section where users can purchase'+
        ' products offered by the company. This application was developed using Android Studio, the prototype'+
        ' design was done using InVision Studio, the database management and user authentication was done with'+
        ' the Firebase platform.'
    },
    'p-project-3':{
        'es':'Split Stream es una aplicación en la que los usuarios pueden ver multiples canales de '+
        'la plataforma Twitch.tv. Esta aplicación fue desarrollada con Android Studio y hace uso'+
        'de HTML, CSS y JavaScript.',

        'en':'Split Stream is an application where users can watch multiple channels of the Twitch.tv platform. '+
        'Twitch.tv platform. This application was developed with Android Studio and makes use of HTML, CSS and JavaScript.'+
        'HTML, CSS and JavaScript.'
    },
    'p-project-4':{
        'es': 'Desarrollé un Dashboard que cumple con tres funciones:<br>'+
        '1. Los médicos de Internista a Domicilio pueden consultar los datos de Presión Arterial y Glucosa de sus pacientes, pueden agregar un resumen clínico, también pueden visualizar un listado de sus pacientes con registros altos.<br>'+
        '2. Los pacientes pueden registrar y consultar sus datos de Presión Arterial y Glucosa, pueden consultar su resumen clínico y agregar a familiares para que estos puedan monitorizar los datos.<br>'+
        '3. Familiares de los pacientes solamente pueden consultar los datos de Presión Arterial, Glucosa y resumen clínico.',

        'en':'I developed a Dashboard that fulfills three functions:<br>'+
        '1. Home Internist physicians can consult their patients\' Blood Pressure and Glucose data, they can add a clinical summary, they can also visualize a list of their patients with high records.<br>'+
        '2. Patients can register and consult their Blood Pressure and Glucose data, they can consult their clinical summary and add family members so that they can monitor the data.<br>'+
        '3. Patients\' relatives can only consult the Blood Pressure, Glucose and clinical summary data.'
    },
    'contact':{
        'es':'<h3>Contacto(</h3><h3 style="color: #ac4c1e;">\'\'</h3><h3>);</h3>',
        'en':'<h3>Contact(</h3><h3 style="color: #ac4c1e;">\'\'</h3><h3>);</h3>'
    },
    'contact-text':{
        'es':'¿Tiene alguna consulta o desea trabajar juntos?',
        'en':'Do you have any questions or would you like to work together?'
    },
    'name-form':{
        'es':'Nombre',
        'en':'Name'
    },
    'email-form':{
        'es':'Correo',
        'en':'Email'
    },
    'msg-form':{
        'es':'Mensaje',
        'en':'Message'
    },
    'alerta-text':{
        'es' : '¡Su mensaje ha sido enviado!',
        'en' : 'Your message has been sent!'
    },
    'alerta-warning':{
        'es' : 'Uno o más de los campos no cumple con la longitud mínima de caracteres,'+
        ' por favor revise su nombre, correo electrónico o escriba un mensaje más largo.',
        'en' : 'One or more of the fields does not meet the minimum character'+
        ' length, please check your name, email or write a longer message.'
    },
    'alerta-link':{
        'es' : '¡Los enlaces no están permitidos!',
        'en' : 'Links are not allowed!'
    },
    'alerta-email':{
        'es' : '¡Ha ingresado una dirección de correo electrónico no válida!',
        'en' : 'You have entered an invalid email address!'
    }
};


var langs = ['en', 'es'];
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function() {
current_lang_index = ++current_lang_index % 2;
current_lang = langs[current_lang_index];
translate();
}

function translate() {
$("[data-translate]").each(function(){
    var key = $(this).data('translate');
    $(this).html(dictionary[key][current_lang] || "N/A");
});
change_img();
}

translate();

function change_img(){
    
    if($('#img-mgb').attr('src') === 'https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal-eng-thumb.png'){
        $('#img-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal-thumb.png');
    }else{
        $('#img-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal-eng-thumb.png');
    }
    
    if($('#img-ss').attr('src') === 'https://wilmerrojasbo.files.wordpress.com/2021/07/splitstream-eng-thumb.png'){
        $('#img-ss').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/splitstream-thumb.png');
    }else{
        $('#img-ss').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/splitstream-eng-thumb.png');
    }

    if($('#img-intdom').attr('src') === 'https://wilmerrojasbo.files.wordpress.com/2021/07/intdom-eng-thumb.png'){
        $('#img-intdom').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/intdom-thumb.png');
    }else{
        $('#img-intdom').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/intdom-eng-thumb.png');
    }

    if($('#img-slide-1-mgb').attr('src')=== 'https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal-eng-thumb.png'){
        $('#img-slide-1-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal-thumb.png');
    }else{
        $('#img-slide-1-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal-eng-thumb.png');
    }

    if($('#img-slide-2-mgb').attr('src')=== 'https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal1-eng.png'){
        $('#img-slide-2-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal1.png');
    }else{
        $('#img-slide-2-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal1-eng.png');
    }

    if($('#img-slide-3-mgb').attr('src')=== 'https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal2-eng.png'){
        $('#img-slide-3-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal2.png');
    }else{
        $('#img-slide-3-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal2-eng.png');
    }
    
    if($('#img-slide-4-mgb').attr('src')=== 'https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal3-eng.png'){
        $('#img-slide-4-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal3.png');
    }else{
        $('#img-slide-4-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal3-eng.png');
    }

    if($('#img-slide-5-mgb').attr('src')=== 'https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal4-eng.png'){
        $('#img-slide-5-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal4.png');
    }else{
        $('#img-slide-5-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal4-eng.png');
    }

    if($('#img-slide-6-mgb').attr('src')=== 'https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal5-eng.png'){
        $('#img-slide-6-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal5.png');
    }else{
        $('#img-slide-6-mgb').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/mgblegal5-eng.png');
    }

    if($('#img-slide-1-intdom').attr('src')=== 'https://wilmerrojasbo.files.wordpress.com/2021/07/intdom-eng-thumb.png'){
        $('#img-slide-1-intdom').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/intdom-thumb.png');
    }else{
        $('#img-slide-1-intdom').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/intdom-eng-thumb.png');
    }

    if($('#img-slide-1-ss').attr('src')=== 'https://wilmerrojasbo.files.wordpress.com/2021/07/splitstream-eng-thumb.png'){
        $('#img-slide-1-ss').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/splitstream-thumb.png');
    }else{
        $('#img-slide-1-ss').attr('src','https://wilmerrojasbo.files.wordpress.com/2021/07/splitstream-eng-thumb.png');
    }

    if($('#list-cv').attr('href') === 'https://wilmerrojasbo.files.wordpress.com/2021/07/cv_wilmer_rojas-2.pdf'){
        $('#list-cv').attr('href','https://wilmerrojasbo.files.wordpress.com/2021/07/cv_wilmer_rojas_1.pdf');
    }else{
        $('#list-cv').attr('href','https://wilmerrojasbo.files.wordpress.com/2021/07/cv_wilmer_rojas-2.pdf');
    }

    if($('#name').attr('placeholder') === 'Su nombre..'){
        $('#name').attr('placeholder','Your name..');
    }else{
        $('#name').attr('placeholder','Su nombre..');
    }

    if($('#email').attr('placeholder') === 'Su correo..'){
        $('#email').attr('placeholder','Your email..');
    }else{
        $('#email').attr('placeholder','Su correo..');
    }

    if($('#message').attr('placeholder') === 'Ingrese su mensaje..'){
        $('#message').attr('placeholder','Enter your message..');
    }else{
        $('#message').attr('placeholder','Ingrese su mensaje..');
    }

    if($('#btn-submit').attr('value') === 'Enviar'){
        $('#btn-submit').attr('value','Submit');
    }else{
        $('#btn-submit').attr('value','Enviar');
    }

}
