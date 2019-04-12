//安卓返回：android  苹果返回：ios
const getPlatformName = function(content) {
	return uni.getSystemInfoSync().platform;
}

export default {
	getPlatformName
}
