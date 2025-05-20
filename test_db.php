<?php
include 'db.php';  // include your database connection file

if ($conn) {
    echo "Database connected successfully!";
} else {
    echo "Failed to connect to database.";
}
?>
