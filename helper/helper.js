function removeSquareBracket(data){

 	const newData = data.substring(1, data.length-1);

	return JSON.parse(newData);

}

module.exports = {
	removeSquareBracket,

};