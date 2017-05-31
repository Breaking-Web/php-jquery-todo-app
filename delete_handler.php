<? include 'db.php' ?>
<? include 'functions.php' ?>
<?
    $items = $_POST['id'];
    $query = "DELETE FROM todos WHERE todo = '$items'";
    $result = mysqli_query($connection, $query);
    if(!$result) {
        die("QUERY FAILED" . mysqli_error($connection));
    }
?>
