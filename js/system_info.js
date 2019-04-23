const getDeviceId = function() {
	// #ifdef APP-PLUS
	return plus.device.uuid;
	// #endif
	return '';
}

export default {
	getDeviceId
}
