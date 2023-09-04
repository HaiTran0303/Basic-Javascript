// var fullName = 'Tran Hoang Hai';
// var age = 26;


// alert(fullName);
// alert(age);


//console.log('Day la 1 dong log')

//confirm('Xac nhan') *Dung de hien thi thong bao xac nhan

//prompt('Xac nhan') *Dung de hien thi o message de dien thong tin

// setTimeout(function(){
//     alert('Thong bao')
// }, 1000) *Dung de set doan code chay sau 1 thoi gian


// setInterval(function(){
//     console.log('day la log')  *Thuc hien dung code lap lai sau 1 thoi gian
// }, 1000)

function run(data) {
	var arr1 = data.every(data % 2 == 0);
	if (arr1) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}