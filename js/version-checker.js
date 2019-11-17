//Json文件格式内容：
//{"version":"1.0.0","url":"http://120.79.197.189:3051/shentongfuzhu_v2.apk"}

export default {
	check(jsonUrl, onCancelCallback) {
		uni.request({
			url: jsonUrl + '?random=' + Math.random(),
			success: (res) => {
				let newVersion = res.data.version;
				let url = res.data.url;
				console.log('newVersion:' + newVersion);
				console.log('url:' + url);
				// #ifdef APP-PLUS
				let currVersion = plus.runtime.version;
				console.log('currVersion:' + currVersion);
				if (currVersion != newVersion) {
					uni.showModal({
						title: '新版本已发布',
						content: '是否立即更新？',//该项不能为空，否则iOS无法弹出
						showCancel: true,
						cancelText: '暂不更新',
						cancelColor: '#999999',
						confirmText: '立即更新',
						success: res => {
							if (res.confirm) {
								plus.runtime.openURL(url);
							}else{
								onCancelCallback();
							}
						}
					});
				}else{
					onCancelCallback();
				}
				// #endif
			},
			fail: (err) => {
				console.error(JSON.stringify(err));
				onCancelCallback();
			}
		});
	}
}
