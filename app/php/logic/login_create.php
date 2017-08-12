<div class="col s3 offset-s1">
    <form action="create_handler.php" method="POST" id="createForm">
        <div class="input-field ">
            <label for="username">Todo</label>
            <input autocomplete="off" id="todo" required type="text" name="todo" class="form-control">
        </div>
        <div class="input-field">
            <label for="password">Date</label>
            <input id="date" class="datepicker" value="" type="date" name="date" class="form-control">
        </div>
        <button class="btn waves-effect waves-light light-green add lighten-2" type="submit" id="create" name="create" onclick="createTodo(event)">Add</button>
    </form>
</div>
