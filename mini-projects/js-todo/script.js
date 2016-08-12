var $todoList = $('.todos');

// Add item to list
function addNewTodoItem() {
    var $todoText = $('.todoText'),
        item = $todoText.val();

    // Show error is input is empty
    if (item.length >= 1) {
        $todoList.append('<li> ' + item + '</li>');
        $todoText.val('');
    } else {
        $('.validater').fadeIn().delay(500).fadeOut();
    }
}

//Add item to list when button is clicked
$('.todoButton').on('click', addNewTodoItem);

// Delete item when double clicked
var deleteTodoItem = function(index) {
    $todoList.on('dblclick', 'li', function() {
        $(this).fadeOut();
    })
}();

// Prevent window from reloading & add todo when enter is pressed
var preventEnter = function() {
    $(window).keydown(function(e) {
        if (e.keyCode == 13) {
            addNewTodoItem();
            e.preventDefault();
        }
    })
}();

//Add a line-through completed todo
var markItemComplete = function() {
    $todoList.on('click', 'li', function() {
        $(this).toggleClass('completed');
    })
}();
