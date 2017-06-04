<? include 'db.php' ?>

<?

    function readRows() {
        global $connection;
        $query = "SELECT * FROM todos";
        $result = mysqli_query($connection, $query) OR die("ERROR: ".mysql_error());
        while($row = mysqli_fetch_assoc($result)) {
            echo '<div class="collection-item animated ' . ($row['done'] == 1 ? 'done-it' : 'noooo') . '">';

            // echo '<option value="'.$value.'" '.(($value=='United States')?'selected="selected"':"").'>'.$value.'</option>';

                echo '<h3></h3>';
                echo $row['todo'];
                echo '<strong class="collection-item__date">';
                    echo $row['date'];
                    echo '<br>';
                echo '</strong>';
                echo "
                    <form class=\"deleteDown\" action=\"delete_handler.php\" method=\"POST\">
                        <input class=\"hide-input\" name=\"id\"  value=\"". $row['todo']. "\">
                        <button onclick=\"deleteItem(event)\" class=\"btn waves-effect waves-light delete deep-orange darken-1\" type=\"submit\" name=\"delete\">✕</button>
                    </form>";
                echo "
                    <form class=\"doneForm\" action=\"done_handler.php\" method=\"POST\">
                        <input class=\"hide-input\" name=\"id\"  value=\"". $row['todo']. "\">
                        <button onclick=\"doneIt(event)\" class=\"btn waves-effect waves-light done light-green lighten-1\" type=\"submit\" name=\"done\">&#10003;</button>
                    </form>";

            echo '</div>';
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
