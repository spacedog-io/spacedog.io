/*
 *  © David Attias 2015
 */

var spaces = {};
spaces['lvh.me'] = {'protocol':'http', 'host': 'lvh.me:8443'};
spaces['spacedog.io'] = {'protocol':'https', 'host': 'spacedog.io'};
spaces['cockpit.spacedog.io'] = {'protocol':'https', 'host': 'spacedog.io'};

function backendUrl(path, backendId) {
	var space = spaces[location.hostname];
	if (!backendId) backendId = "api";
	if (!path) path = "";
	return space.protocol + '://' + backendId + '.' + space.host + path;
}

function init() {
}

$(document).ready(init);