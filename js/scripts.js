function read() {
    var todo = $('#todo').val();
    var date = $('#date').val();
    var inHTML =
    '<div class="collection-item animated fadeInDown">' +
        todo + '<strong class="collection-item__date">' + date + '</strong>' +
        '<form class="deleteDown" action="delete_handler.php" method="POST"> ' +
            '<input class="hide-input" name="id"  value="' + todo + '">' +
            '<button onclick="deleteItem(event)" class="btn delete deep-orange darken-1 waves-effect waves-light" type="submit" name="delete">✕</button>' +
        '</form>' +
    '</div>';
    $('#reader').append(inHTML);
    $('.collection-item:last-child').addClass('animated fadeInDown');
}

function deleteItem(event) {
    event.preventDefault();
    var thisForm = $(event.target).parent('.deleteDown');
    $.ajax({
        url: 'delete_handler.php',
        method: 'post',
        data: thisForm.serialize(),
        datatype: 'text',
        success: function(strMessage) {
            $('#result').text(strMessage);
        },
    });
    var levUp = event.target.parentNode;
    var parent = levUp.parentNode;
    parent.classList.remove('fadeInDown');
    parent.classList.add('fadeOut');
    console.log('Deleted');
    setTimeout(function() {
        parent.style.display = 'none';
    }, 500);
}

function createTodo(event) {
    event.preventDefault();
    $.ajax({
        url: 'create_handler.php',
        method: 'post',
        data: $('#createForm').serialize(),
        datatype: 'text',
        success: function(strMessage) {
            $('#result').text(strMessage);
        },
    });
    read();
    setTimeout(function() {
        $('.form-control').val('');
    });
}

$(document).ready(function() {
    Materialize.updateTextFields();
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 15
    });
});
