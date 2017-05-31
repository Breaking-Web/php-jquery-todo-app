<div class="col offset-s4 s4">
    <form action="create_handler.php" method="POST" id="createForm">
        <div class="form-group">
            <label for="username">Todo</label>
            <input autocomplete="off" id="todo" required type="text" name="todo" class="form-control">
        </div>
        <div class="form-group">
            <label for="password">Date</label>
            <input id="date" class="datepicker" value="" type="date" name="date" class="form-control">
        </div>
        <input class="btn waves-effect waves-light" type="submit" id="create" name="create" onclick="createTodo(event)" value="CREATE">
    </form>
</div>
