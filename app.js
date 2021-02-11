// connect API
const https = require('https');
const username = "chalkers";
function printMessage (username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badges and ${points} points in Javascript`;
    console.log(message);
};

// Read the data
function getProfile (username) {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        let body = '';
        console.dir(response.statusCode);
        response.on('data', data => {
            
            body += data.toString();
        })
        response.on('end', () => {
            const profile = JSON.parse(body);
            printMessage(username, profile.badges.length, profile.points.JavaScript);
        });
    });
    request.on('error', error => {
        console.error(`Problem with request: ${error.message}`);
    });

}
