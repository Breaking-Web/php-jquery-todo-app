<?
    $connection = mysqli_connect('localhost', 'root', 'root', 'todos');
    // Get off of the "krackozyabri"
    mysqli_query($connection, "SET NAMES utf8");

    if(!$connection) {
        die('Database connection failed');
    }

?>
