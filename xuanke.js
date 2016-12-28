function create(profileID, courseID) {
	const url = `http://eams.uestc.edu.cn/eams/stdElectCourse!batchOperator.action?profileId=${profileID}`
	function send(data) {
		$.post(url, data, (res) => {
			const result$ = $(res)
			console.log(result$.find('div').text().trim())
		})
	}
	let data
	if (typeof courseID == "object") {
		data = courseID.map(x => `operator0=${x}%3Atrue%3A0`)
		setInterval(() => {
			for(const d of data) {
				send(d)
			}
		}, 500)
	} else {
		data = `operator0=${courseID}%3Atrue%3A0`
		setInterval(() => send(data), 500)
	}
}
