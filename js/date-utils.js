function timestampToDate(timestamp){
	return new Date(Number(timestamp));
}

function getDaysDiffByDate(dateStart, dateEnd) {
	return getDaysDiffByMS(dateStart.getTime(), dateEnd.getTime());
}

function getDaysDiffByMS(millisecondsStart, millisecondsEnd) {
	var dateDiff = millisecondsEnd - millisecondsStart; //时间差的毫秒数
	return Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
}

export default {
	timestampToDate,
	getDaysDiffByDate,
	getDaysDiffByMS
}

/**
 * 以下这段放到main.js里，即可使用日期格式化。如：console.log(new Date(31313131531).Format('yyyy/MM/dd HH:mm:ss'));
 * Date.prototype.Format = function(fmt) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"H+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"S+": this.getMilliseconds()
	};
	//因为date.getFullYear()出来的结果是number类型的,所以为了让结果变成字符串型，下面有两种方法：
	if (/(y+)/.test(fmt)) {
		//第一种：利用字符串连接符“+”给date.getFullYear()+""，加一个空字符串便可以将number类型转换成字符串。
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			//第二种：使用String()类型进行强制数据类型转换String(date.getFullYear())，这种更容易理解。
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(String(o[k]).length)));
		}
	}
	return fmt;
    };
 */