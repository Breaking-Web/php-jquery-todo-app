<? include 'db.php' ?>

<?

    function readRows() {
        global $connection;
        $query = "SELECT * FROM todos";
        $result = mysqli_query($connection, $query) OR die("ERROR: ".mysql_error());
        while($row = mysqli_fetch_assoc($result)) {
            echo '<a href="#!" class="collection-item animated">';
                echo $row['todo'];
                echo '<strong style="float:right;">';
                    echo $row['date'];
                echo '</strong>';
                echo "
                    <form class=\"deleteDown\" action=\"delete_handler.php\" method=\"POST\">
                        <input class=\"hide-input\" name=\"id\"  value=\"". $row['todo']. "\">
                        <input onclick=\"deleteItem(event)\" class=\"btn btn-primary delete\" type=\"submit\" name=\"delete\" value=\"Done\">
                    </form>";
            echo '</a>';
        }
    }

    function showAllData() {
        global $connection;
        $query = "SELECT * FROM todos";
        $result = mysqli_query($connection, $query);
        if(!$result) {
            die('Query failed ' . mysqli_error($connection));
        }
        while($row = mysqli_fetch_assoc($result)) {
            echo '<option value="'.$row['todo'].'">'.$row['todo'].'</option>';
        }
    }


?>
