//using filter-4
	const employees=[
	{name:"david carlson",age:30},
	{name:"john cena",age:34},
	{name:"mike sheridan",age:25},
	{name:"john carte",age:50}
	];
	let b=[];
	 employees.forEach(function(red){
		if(red.age>30){
	b.push(red);
		}
	})
	console.log(b);