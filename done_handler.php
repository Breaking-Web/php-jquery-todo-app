<? include 'db.php' ?>
<? include 'functions.php' ?>
<?
    $items = $_POST['id'];
    $query = "UPDATE todos SET done = 1 WHERE todo = '$items'";
    $result = mysqli_query($connection, $query);
    if(!$result) {
        die("QUERY FAILED" . mysqli_error($connection));
    }
?>
