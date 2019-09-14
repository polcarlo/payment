const helper = require('./helper');

const cashOutJuridicalData = '';

function cashIn(data){

	this.cashInData = data;
}

function cashOutJuridical(data){

	this.cashOutJuridicalData = data;


}

function cashOutNatural(data){
	this.cashOutNaturalData = data;
}


function compute(data){

	if(data.type == 'cash_in'){

		const cashInDetails = helper.removeSquareBracket(this.cashInData);

		const total = data.operation.amount * cashInDetails.percents * .01;

		if(total >= 5) {

			console.log(cashInDetails.max.amount.toFixed(2));

		}else{
			console.log(total.toFixed(2));
		}
	
	}else if(data.type == 'cash_out' && data.user_type == 'juridical'){

		const cashOutJuridicalDetails = this.cashOutJuridicalData;

		console.log(this.cashOutJuridicalData);

		/*const total = data.operation.amount * cashOutJuridicalDetails.percents * .01;

		if(total <= 0.5) {

			console.log(cashOutJuridicalDetails.min.amount.toFixed(2));

		}else{
			console.log(total.toFixed(2));
		}*/

	}

/*	const cashInDetails = removeSquareBracket(this.cashInData);

	console.log(cashInDetails);

	const cashOutJuridicalDetails = removeSquareBracket(this.cashOutJuridicalData);

	console.log(cashOutJuridicalDetails);

	const cashOutNaturalDetails = removeSquareBracket(this.cashOutNaturalData);

	console.log(cashOutNaturalDetails.percents);*/


	
}





module.exports = {
	cashIn,
	cashOutJuridical,
	cashOutNatural,
	compute


};
