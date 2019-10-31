//拍一张图片或从相册取图片并等比缩小优化
function urlEncode(url) {
	return encodeURI(url);
}

function urlDecode(url) {
	return decodeURI(url);
}

export default {
	urlEncode,
	urlDecode
}
