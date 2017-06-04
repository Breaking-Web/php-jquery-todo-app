;(function() {
    window.Q = (domElement) => {
        var all = document.querySelectorAll(domElement);
        return all.length > 1 ? all : document.querySelector(domElement);
    }
})();

function read() {
    var todo = $('#todo').val();
    var date = $('#date').val();
    var inHTML =
    '<div class="collection-item animated fadeInDown">' +
        todo + '<strong class="collection-item__date">' + date + '</strong>' +
        '<h3></h3>' + 
        '<form class="deleteDown" action="delete_handler.php" method="POST"> ' +
            '<input class="hide-input" name="id"  value="' + todo + '">' +
            '<button onclick="deleteItem(event)" class="btn delete deep-orange darken-1 waves-effect waves-light" type="submit" name="delete">✕</button>' +
        '</form>' +        
        '<form class="doneForm" action="done_handler.php" method="POST"> ' +
            '<input class="hide-input" name="id"  value="' + todo + '">' +
            '<button onclick="doneIt(event)" class="btn done light-green lighten-1 waves-effect waves-light" type="submit" name="done">&#10003;</button>' +
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
        console.log(parent);
        parent.remove();
        addNum('.collection-item');
    }, 500);
}


function doneIt(event) {
    event.preventDefault();
    var thisForm = $(event.target).parent('.doneForm');
    $.ajax({
        url: 'done_handler.php',
        method: 'post',
        data: thisForm.serialize(),
        datatype: 'text',
        success: function(strMessage) {
            $('#result').text(strMessage);
        },
    });
    var levUp = event.target.parentNode;
    var parent = levUp.parentNode;
    console.log(parent);
    parent.classList.remove('fadeInDown');
    setTimeout(function() {
        parent.classList.add('done-it');
    }, 10);
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
        addNum('.collection-item');
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


function addNum(arr) {
    if(Q(arr)) {
        var items = Q(arr);
        if(items.length > 1) {
            // console.log(items);
            for(var i = 0; i < items.length; i++) {
                var h3 = items[i].querySelector('h3');
                h3.innerText = i + 1 + '.';
            }
        } else {
            var thish3 = Q(arr).querySelector('h3');
            thish3.innerText = '';
        }
    }
}
addNum('.collection-item');
