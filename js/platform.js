//安卓返回：android  苹果返回：ios  微信开发者工具：devtools
function getPlatformName() {
	return uni.getSystemInfoSync().platform;
}

//是否是Android端
function isAndroid() {
	return getPlatformName == 'android';
}

//是否是iOS端
function isIOS() {
	return getPlatformName == 'ios';
}

//是否是微信开发工具测试端
function isWeiXinDevTools() {
	return getPlatformName == 'devtools';
}

export default {
	getPlatformName,
	isAndroid,
	isIOS,
	isWeiXinDevTools
}
