export function getDateDdMm() {
	const today = new Date();
	let mm = today.getMonth() + 1; // Months start at 0!
	let dd = today.getDate();

	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;

	return dd + "/" + mm;
}

export function getDateDdMmYy() {
	const today = new Date();
	let mm = today.getMonth() + 1; // Months start at 0!
	let dd = today.getDate();
	let yy = today.getFullYear();

	if (dd < 10) dd = "0" + dd;
	if (mm < 10) mm = "0" + mm;

	return dd + "/" + mm + "/" + yy;
}
