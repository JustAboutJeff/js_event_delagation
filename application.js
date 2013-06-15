$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $('body').on('click','button.add',function(e) {
      var $that = $(this);
      addTodo($that);
    });
    $('body').on('click','a.delete',function(e) {
      var $that = $(this);
      deleteTodo($that);
    });
    $('body').on('click','a.complete',function(e) {
      var $that = $(this);
      completeTodo($that);
    });
  }

  function addTodo($that) {
    var $todo = buildTodo($that.closest('input').val());
    $todo.appendTo('.todo_list');
  }

  function deleteTodo($that) {
    $that.closest('div.todo').remove();
  }

  function completeTodo($that) {
    $that.closest('div.todo').addClass('complete');
  }

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  bindEvents();
});
