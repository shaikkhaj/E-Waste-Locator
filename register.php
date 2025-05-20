<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $device_type = $_POST['device_type'];
    $company = $_POST['company'];
    $model = $_POST['model'];
    $mobile = $_POST['mobile_number'];

    // Validate input
    if (empty($name) || empty($device_type) || empty($company) || empty($model) || empty($mobile)) {
        echo "Please fill out all fields.";
        exit;
    }

    // Calculate points
    $points = 0;
    switch ($device_type) {
        case 'phone': $points = 50; break;
        case 'laptop': $points = 100; break;
        case 'tablet': $points = 75; break;
        case 'other': $points = 25; break;
    }

    // Secure insert
    $stmt = $conn->prepare("INSERT INTO devices (name, device_type, company, model, mobile_number, points) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssi", $name, $device_type, $company, $model, $mobile, $points);

    if ($stmt->execute()) {
        echo "<script>alert('Device registered successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
