
export default{
	//复制到系统剪贴板
	copyToSystemClipboard(content) {
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
				var Context = plus.android.importClass("android.content.Context");
				var main = plus.android.runtimeMainActivity();
				var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
				plus.android.invoke(clip, "setText", content);
				return true;
			case 'ios':
				var UIPasteboard = plus.ios.importClass("UIPasteboard");
				var generalPasteboard = UIPasteboard.generalPasteboard();
				generalPasteboard.setValueforPasteboardType(content, "public.utf8-plain-text");
				return true;
			default:
				console.log('仅发布到APP才能复制到系统剪贴板');
				break;
		}
		return false;
	},
	
	//从系统剪贴板读取内容
	getFromSystemClipboard() {
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
				var Context = plus.android.importClass("android.content.Context");
				var main = plus.android.runtimeMainActivity();
				var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
				return plus.android.invoke(clip, "getText");
			case 'ios':
				var UIPasteboard = plus.ios.importClass("UIPasteboard");
				var generalPasteboard = UIPasteboard.generalPasteboard();
				return generalPasteboard.valueForPasteboardType("public.utf8-plain-text");
			default:
				console.log('仅发布到APP才能复制到系统剪贴板');
				break;
		}
		return '';
	}
}