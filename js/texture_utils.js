//压缩图片
const resize = function(imagePath, newW, newH, callback) {
	// #ifdef APP-PLUS
	new Promise((res) => {
		var localPath = plus.io.convertAbsoluteFileSystem(imagePath.replace('file://', ''))
		plus.io.resolveLocalFileSystemURL(localPath, (entry) => {
			entry.file((file) => {
				plus.zip.compressImage({
					src: imagePath,
					dst: imagePath.replace('.jpg', '2.jpg').replace('.JPG', '2.JPG').replace('.png', '2.png').replace('.PNG','2.PNG'),
					width: newW,
					height: newH,
					quality: 90,
					overwrite: true
				}, (event) => {
					let newImg = imagePath.replace('.jpg', '2.jpg').replace('.JPG', '2.JPG').replace('.png', '2.png').replace('.PNG', '2.PNG')
					callback(newImg)
				}, function(error) {
					uni.showModal({
						content: '图片太大,请重新选择图片!',
						showCancel: false
					})
				})
			})
		}, (error) => {
			console.error('出错了: ' + error.message)
			uni.showModal({
				content: '图片太大,请重新选择图片!',
				showCancel: false
			})
		})
	})
	return;
	// #endif
	callback(imagePath);
}

export default {
	resize
}
