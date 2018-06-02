<?php

use Google\Spreadsheet\DefaultServiceRequest;
use Google\Spreadsheet\ServiceRequestFactory;
require_once __DIR__ . '/vendor/autoload.php';


putenv('GOOGLE_APPLICATION_CREDENTIALS=' . __DIR__ . '/client_s.json');
$client = new Google_Client;
$client->useApplicationDefaultCredentials();

$client->setApplicationName("anopinio");
$client->setScopes(['https://www.googleapis.com/auth/drive',
                        'https://spreadsheets.google.com/feeds']);

if ($client->isAccessTokenExpired()) {
    $client->refreshTokenWithAssertion();
}

$accessToken = $client->fetchAccessTokenWithAssertion()["access_token"];
ServiceRequestFactory::setInstance(
    new DefaultServiceRequest($accessToken)
);

// Get our spreadsheet
$spreadsheet = (new Google\Spreadsheet\SpreadsheetService)
   ->getSpreadsheetFeed()
   ->getByTitle('13nvgxt1et589wAnFJl4oPgavGd7ScQM6cmsE9iy11uk');

// Get the first worksheet (tab)
$worksheets = $spreadsheet->getWorksheetFeed()->getEntries();
$worksheet = $worksheets[0];

// append our new data to the worksheet
$comment = htmlspecialchars($_POST['comment']);
$currentTime = date('l jS \of F Y h:i:s A');
if (!empty($comment)){
    $listFeed = $worksheet->getListFeed();
    $listFeed->insert(["time" => $currentTime, "narrative" => $comment]);
    echo "Great Success";
} else {
    echo "Nothing to submit.";
}