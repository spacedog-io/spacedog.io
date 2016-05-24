/*
 *  © David Attias 2015
 */

var spaces = {
	'lvh' : {'protocol':'http', 'host': 'lvh.me:8443'},
	'spacedog' : {'protocol':'https', 'host': 'spacedog.io'}
}

function backendUrl(path, backendId) {
	var hostname = location.hostname.split('.');
	var space = spaces[hostname[hostname.length-2]];
	if (!backendId) backendId = "api";
	if (!path) path = "";
	return space.protocol + '://' + backendId + '.' + space.host + path;
}

function init() {
}

$(document).ready(init);