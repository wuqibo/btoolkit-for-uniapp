//开启权限:
//<uses-permission android:name=\"android.permission.SET_WALLPAPER\"/>

//设置图片设为壁纸（imgUrl支持本地地址和网络http地址）
const setToWallpaper = function(imgUrl) {
	// #ifdef APP-PLUS
	plus.gallery.save(imgUrl, function(e) {
		var WallpaperManager = plus.android.importClass("android.app.WallpaperManager");
		var Main = plus.android.runtimeMainActivity();
		var wallpaperManager = WallpaperManager.getInstance(Main);
		plus.android.importClass(wallpaperManager);
		var BitmapFactory = plus.android.importClass("android.graphics.BitmapFactory");
		var filePath = plus.io.convertLocalFileSystemURL(e.file);
		var bitmap = BitmapFactory.decodeFile(filePath);
		try {
			wallpaperManager.setBitmap(bitmap);
			uni.showToast({
				icon: "none",
				title: "壁纸设置成功"
			})
		} catch (e) {
			uni.showToast({
				icon: "none",
				title: "壁纸设置失败"
			})
		}
	}, function(err) {
		console.log(JSON.stringify(err));
		uni.showToast({
			icon: "none",
			title: "图片加载失败"
		})
	});
	return;
	// #endif
	console.log('非App平台不能设置壁纸');
}

export default {
	setToWallpaper
}
