<?php
// Get the URL of the code to fetch from the query parameters
$url = $_GET['url'];

// Fetch the code from the specified URL
$code = file_get_contents($url);

// Determine the content type based on the file extension
$contentType = 'text/plain';
$extension = pathinfo(parse_url($url, PHP_URL_PATH), PATHINFO_EXTENSION);
if ($extension === 'html') {
    $contentType = 'text/html';
} elseif ($extension === 'css') {
    $contentType = 'text/css';
} elseif ($extension === 'js') {
    $contentType = 'application/javascript';
} elseif ($extension === 'php') {
    $contentType = 'text/plain'; // Set the content type to plain text for PHP code
}

// Set the response headers
header('Content-Type: ' . $contentType);

// Return the code as JSON
echo json_encode(array('code' => $code));
?>
