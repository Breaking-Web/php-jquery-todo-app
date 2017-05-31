function read() {
    var todo = $('#todo').val();
    var date = $('#date').val();
    var inHTML =
    '<a href="#!" class="collection-item animated fadeInDown">' +
        todo + '<strong style="float:right;">' + date + '</strong>' +
        '<form class="deleteDown" action="delete_handler.php" method="POST"> ' +
            '<input class="hide-input" name="id"  value="' + todo + '">' +
            '<input onclick="deleteItem(event)" class="btn btn-primary delete" type="submit" name="delete" value="Done">' +
        '</form>' +
    '</a>';
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
