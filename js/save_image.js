//保存图片并返回本地路径（imgUrl支持本地地址和网络http地址,不仅限于APP平台）
const saveImageToPhotosAlbum = function(imgUrl, callback) {
	function saveToPhotosAlbum(localPath) {
		uni.saveImageToPhotosAlbum({
			filePath: localPath,
			success: () => {
				uni.showToast({
					icon: "none",
					title: "已保存到手机相册"
				});
				if (callback) {
					callback(imgUrl);
				}
			},
			fail: (err) => {
				console.log(JSON.stringify(err));
				uni.showToast({
					icon: "none",
					title: "保存到相册失败"
				})
			}
		});
	}
	if (imgUrl.substring(0,4)=='http') {
		uni.downloadFile({
			url: imgUrl,
			success: (e) => {
				saveToPhotosAlbum(e.tempFilePath);
			},
			fail: (err) => {
				console.log(JSON.stringify(err));
				uni.showToast({
					icon: "none",
					title: "图片加载失败"
				})
			}
		});
	}else{
		saveToPhotosAlbum(imgUrl);
	}
}

export default {
	saveImageToPhotosAlbum
}
