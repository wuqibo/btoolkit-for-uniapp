//安卓返回：android  苹果返回：ios
const getPlatformName = function() {
	return uni.getSystemInfoSync().platform;
}

//是否是Android端
const isAndroid = function() {
	return getPlatformName == 'android';
}

//是否是iOS端
const isIOS = function() {
	return getPlatformName == 'ios';
}

export default {
	getPlatformName,
	isAndroid,
	isIOS
}
