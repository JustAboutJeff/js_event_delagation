$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    $('body').on('click','button.add',function(e) {
      var todoName = $('input.todo').val();
      addTodo(todoName);
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

  function addTodo(todoName) {
    var $todo = buildTodo(todoName);
    $todo.appendTo('.todo_list');
  }

  function deleteTodo($that) {
    $that.closest('div.todo').remove();
  }

  function completeTodo($that) {
    $that.closest('div.todo').addClass('complete');
  }

  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    return $todo;
  }
  bindEvents();
});
