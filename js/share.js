const providerList = [];

//初始化分享通道
const initShareChannels = function() {
	uni.getProvider({
		service: "share",
		success: (e) => {
			let data = []
			for (let i = 0; i < e.provider.length; i++) {
				switch (e.provider[i]) {
					case 'weixin':
						data.push({
							name: '分享到微信好友',
							id: 'weixin',
							type: 'WXSceneSession'
						});
						data.push({
							name: '分享到微信朋友圈',
							id: 'weixin',
							type: 'WXSenceTimeline'
						});
						data.push({
							name: '添加到微信收藏',
							id: 'weixin',
							type: 'WXSceneFavorite'
						});
						break;
					case 'qq':
						data.push({
							name: '分享到QQ',
							id: 'qq'
						})
						break;
					default:
						break;
				}
			}
			this.providerList = data;
		},
		fail: (e) => {
			console.log("获取登录通道失败", e);
		}
	});
}

//分享照片
const share = function(text, imgUrl, link) {
	if (this.providerList.length === 0) {
		uni.showModal({
			title: "当前无分享渠道!",
			showCancel: false
		})
		return;
	}
	let itemList = this.providerList.map(function(value) {
		return value.name
	})
	uni.showActionSheet({
		itemList: itemList,
		success: (res) => {
			uni.share({
				provider: this.providerList[res.tapIndex].id,
				scene: this.providerList[res.tapIndex].type ? this.providerList[res.tapIndex].type : '',
				type: this.providerList[res.tapIndex].id == 'weixin' ? 0 : 1,
				title: text,
				imageUrl: imgUrl,
				href: link,
				success: (res) => {
					console.log("success:" + JSON.stringify(res));
					uni.showToast({
						title: '分享成功',
						icon: 'none'
					});
				},
				fail: (e) => {
				}
			});
		}
	});
}

export default {
	initShareChannels,
	share
}
