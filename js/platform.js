//安卓返回：android  苹果返回：ios  微信开发者工具：devtools
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

//是否是微信开发工具测试端
const isWeiXinDevTools = function() {
	return getPlatformName == 'devtools';
}

export default {
	getPlatformName,
	isAndroid,
	isIOS,
	isWeiXinDevTools
}
