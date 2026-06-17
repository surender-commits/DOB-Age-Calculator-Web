<?php

$host = "localhost";
$userName = "u485154668_contact_us_DB";
$password = "contact_us_DB#2024";
$dbName = "u485154668_contact_us";
$tableName = "contactdb";
$tableRows = "name ,email ,sub ,msg ,ip";

// Create database connection
$conn = new mysqli($host, $userName, $password, $dbName);

// Check connection
if ($conn->connect_error) {

    die("Connection failed: " . $conn->connect_error);
}
