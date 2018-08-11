import config from "../../config";

export default function save(input) {
  console.log("hello from spreadsheet.js " + input + config.spreadsheetId);

  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .append({
        key: config.apiKey,
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs,
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A2:B",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [
            ["test", "test again"]
          ]
        }
      }).then(function (response) {
        console.log("val");
        console.log(response.result);
      }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
      });
  });
}