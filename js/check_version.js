//Json文件格式内容：
//{"version":"1.0.0","url":"http://120.79.197.189:3051/shentongfuzhu_v2.apk"}

const check = function(jsonUrl) {
	// #ifdef APP-PLUS
	uni.request({
		url: jsonUrl + '?random=' + Math.random(),
		success: (res) => {
			console.log(JSON.stringify(res));
			let versionName = res.data.version;
			let versionUrl = res.data.url;
			console.log('versionName:' + versionName);
			console.log('versionUrl:' + versionUrl);
			if (plus.runtime.version != versionName) {
				uni.showModal({
					title: '新版本已发布，是否立即更新',
					content: (uni.getSystemInfoSync().platform == 'ios') ? '':'(更新将在后台执行,可下拉状态栏查看)',
					showCancel: true,
					cancelText: '暂不更新',
					cancelColor: '#666666',
					confirmText: '立即更新',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							plus.runtime.openURL(versionUrl);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		fail: (err) => {
			console.error(JSON.stringify(err));
		}
	});
	// #endif
}

export default {
	check
}
