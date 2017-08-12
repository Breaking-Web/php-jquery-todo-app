/*********************************
 * All javascript login here *****
 *********************************/


/**
 * Materialize datepicker
 */
$(document).ready(function() {
  Materialize.updateTextFields();
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 15
  });
});

/**
 * Print all todos
 */
function read() {
  var todo = $('#todo').val();
  var date = $('#date').val();
  var inHTML = `
    <div class="collection-item animated fadeInDown">
      ${todo}<strong class="collection-item__date">${date}</strong>
      <h3></h3>
      <form class="deleteDown" action="delete_handler.php" method="POST"> 
        <input class="hide-input" name="id" value="${todo}">
        <button onclick="deleteItem(event)" 
          class="btn delete deep-orange darken-1 waves-effect waves-light" 
          type="submit" name="delete">✕</button>
      </form>        
      <form class="doneForm" action="done_handler.php" method="POST"> 
        <input class="hide-input" name="id" value="${todo}">
        <button onclick="doneIt(event)" 
          class="btn done light-green lighten-1 waves-effect waves-light" 
          type="submit" name="done">&#10003;</button>
      </form>
    </div>
  `;
  $('#reader').append(inHTML);
  $('.collection-item:last-child').addClass('animated fadeInDown');
}

/**
 * Delete todos
 */
function deleteItem(event) {
  event.preventDefault();
  var thisForm = $(event.target).parent('.deleteDown');
  $.ajax({
    url: 'app/php/logic/delete_handler.php',
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

/**
 * Todo complete
 */
function doneIt(event) {
  event.preventDefault();
  var thisForm = $(event.target).parent('.doneForm');
  $.ajax({
    url: 'app/php/logic/done_handler.php',
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

/**
 * Todo create
 */
function createTodo(event) {
  event.preventDefault();
  $.ajax({
    url: 'app/php/logic/create_handler.php',
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



/**
 * Adding number to the tasks
 * Start after frist task
 */
function addNum(arr) {
  if($(arr)) {
    var items = $(arr);
    if(items.length > 1) {
      for(var i = 0; i < items.length; i++) {
        var h3 = items[i].querySelector('h3');
        h3.innerText = i + 1 + ')';
      }
    } else {
      var thish3 = $(arr).find('h3');
      thish3.innerText = '';
    }
  }
}

// Init num
addNum('.collection-item');
