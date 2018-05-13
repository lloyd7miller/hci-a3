<?php

$title = $_POST['title'];
$author = $_POST['author'];
$content = $_POST['article_content'];

$servername = "server194.web-hosting.com";
$username = "allgffaw_cst";
$password = "taranto7";
$dbname = "allgffaw_cst";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    echo("Connection successful...\n\n" . $_GET['name']);
}

$sql = "INSERT INTO BlogPosts (author, title, body) VALUES ('$author', '$title', '$content',...)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>