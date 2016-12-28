function create(profileID, courseID) {
    const url = `http://eams.uestc.edu.cn/eams/stdElectCourse!batchOperator.action?profileId=${profileID}`
    const data = `operator0=${courseID}%3Atrue%3A0`
    setInterval(()=>$.post(url, data, (res) => {
        const result$ = $(res)
        console.log(result$.find('div').text().trim())
    }), 500)
}
