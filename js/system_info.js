const getDeviceId = function() {
	// #ifdef APP-PLUS
	return plus.device.uuid;
	// #endif
	return '非APP平台无法获取DeviceId';
}

export default {
	getDeviceId
}
