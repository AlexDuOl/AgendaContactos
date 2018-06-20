var count = 0;

function getContactData () {
    var $name = $('#contact-name');
    var $phone = $('#contact-phone');
    addContactData($name.val(), $phone.val());
    $name.val('');
    $phone.val('');
   /* $('#contact-name').val('');*/
   /* $('#contact-phone').val('');*/
};

var template = '<div class="row">'+
                    '<div class="col offset-s3 s6">'+
                        '<div class="card blue-grey darken-1">'+
                            '<div class="card-content white-text">'+
                              '<h3>__name__</h3>'+
                              '<span>__phone__</span>'+
                              '<a class="waves-effect waves-light btn right" onClick="deleteContact()"><i class="material-icons center">delete</i></a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';

function addContactData (name, phone) {
    count++;
    var finalTemplate = "";
    finalTemplate = template.replace('__name__', name).replace('__phone__', phone);

    $('main').append(finalTemplate);
    $('h5').html('Total contactos: '+ count);
    swal("Yeeeii!", "Contacto agregado!", "success");
};

function deleteContact () {
    count--;
    var item = $(event.currentTarget);
    var card = item.parent();
    var colCard = card.parent();
    var rowCard = colCard.parent();
    rowCard.remove();
    $('h5').html('Total contactos: ' + count);
}



















$(document).ready(function(){
    $('.modal').modal();
    $('#add-contact').click(getContactData)
  });




