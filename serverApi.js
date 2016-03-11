import request from "superagent";

export default {
	getTabContentResponse(tabName) {

		return new Promise(function(resolve, reject) {
			request
				.post('/api')
				.send({tab: tabName})
				.end((err, res) => {
					if (err) {
						reject(err)
					} else {
						console.log(res);
						resolve(res.text)						
					}
				})
		})
	}
}