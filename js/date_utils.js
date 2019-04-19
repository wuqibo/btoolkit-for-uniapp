const getDaysDiffByDate = function(dateStart, dateEnd) {
	return getDaysDiffByMS(dateStart.getTime(), dateEnd.getTime());
}

const getDaysDiffByMS = function(millisecondsStart, millisecondsEnd) {
	var dateDiff = millisecondsEnd - millisecondsStart; //时间差的毫秒数
	return Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
}

export default {
	getDaysDiffByDate,
	getDaysDiffByMS
}
