<? include 'db.php' ?>
<? include 'functions.php' ?>
<?
    $todo = $_POST['todo'];
    $date= $_POST['date'];
    $query = "INSERT INTO todos(todo,date) ";
    $query .= "VALUES ('$todo','$date')";
    $result = mysqli_query($connection, $query);
    if(!$result) {
        die('Connect!' . mysqli_error($connection));
    }
?>
