function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min)) + min; 
}
let array=[];
for(let i=1;i<=10;i++){
	array.push(getRandomInt(1, 100));
	console.log(array); }
	{


 int aux[]=new int [array.length];
 for (int i=array.length-1, j=0;i>=0;i--,j++){
aux[j]=array[i];
console.log(aux[j]); 
console.log(array); 
array.unshift(3);
array.push(8);
console.log(array);
 }
}
