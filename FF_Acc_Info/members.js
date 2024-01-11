//var GM_roles = new Set(["520946669", "1341742864"]);

var Platinum_roles = {0,1};

var Gold_roles = {2,3};

function fetchGMRoles(callback) {
    // Assume this is an asynchronous operation, e.g., fetching data from a server
    setTimeout(function () {
        var GM_roles = new Set(["520946669", "1341742864"]);
        callback(GM_roles);
    }, 1000); // Simulate delay, adjust as needed
}
