//Json文件格式内容：
//{"version":"1.0.0","url":"http://120.79.197.189:3051/shentongfuzhu_v2.apk"}

const check = function(jsonUrl) {
	uni.request({
		url: jsonUrl + '?random=' + Math.random(),
		success: (res) => {
			console.log(JSON.stringify(res));
			let version = res.data.version;
			let url = res.data.url;
			console.log('version:' + version);
			console.log('url:' + url);
			// #ifdef APP-PLUS
			if (plus.runtime.version != version) {
				uni.showModal({
					title: '新版本已发布，是否立即更新',
					content: (uni.getSystemInfoSync().platform == 'android') ? '(更新将在后台执行,可下拉状态栏查看)':'',
					showCancel: true,
					cancelText: '暂不更新',
					cancelColor: '#666666',
					confirmText: '立即更新',
					success: res => {
						if (res.confirm) {
							console.log('用户点击确定');
							plus.runtime.openURL(url);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
			// #endif
		},
		fail: (err) => {
			console.error(JSON.stringify(err));
		}
	});
}

export default {
	check
}
