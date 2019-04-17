//拍一张图片或从相册取图片并等比缩小优化
const chooseImage = function(minSideSize, callback) {
	uni.chooseImage({
		count: 1,
		sourceType: ['album', 'camera'],
		sizeType: ['compressed', 'original'],
		success: (res) => {
			resize(res.tempFilePaths[0], minSideSize, function(newPath) {
				callback(newPath);
			});
		}
	});
}


//压缩图片(minSideSize自动付给更小的边，另外一边会按比例缩放)
const resize = function(imgPath, minSideSize, callback) {
	uni.getImageInfo({
		src: imgPath,
		success: function(img) {
			let newW, newH;
			if (img.width > img.height) {
				newW = minSideSize * img.width / img.height;
				newH = minSideSize;
			} else if (newH <= 0) {
				newW = minSideSize;
				newH = minSideSize * img.height / img.width;
			}
			plus.io.resolveLocalFileSystemURL(plus.io.convertAbsoluteFileSystem(imgPath.replace('file://', '')), (entry) => {
				entry.file((file) => {
					let compressedPath = imgPath.replace('.jpg', '2.jpg').replace('.JPG', '2.JPG').replace('.jpeg', '2.jpeg').replace(
						'.JPEG', '2.JPEG').replace('.png', '2.png').replace('.PNG', '2.PNG');
					plus.zip.compressImage({
						src: imgPath,
						dst: compressedPath,
						width: newW,
						height: newH,
						quality: 90,
						overwrite: true
					}, (event) => {
						callback(compressedPath);
					}, function(error) {
						uni.showModal({
							content: '分享图片太大,需要请重新选择图片!',
							showCancel: false
						})
					});
				});
			}, (e) => {
				uni.showModal({
					content: '分享图片太大,需要请重新选择图片!',
					showCancel: false
				})
			});
		}
	});
}

export default {
	chooseImage,
	resize
}
