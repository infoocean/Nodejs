//const square = {
//	area : (a) => (a*a),
//	paremiter: (a) => (4*a)
//}


//require square from square.js
const square = require('./square.js');
const calsi = require('./calsi.js');
const file = require('./file1.js');

const calclutesquare = (a)=>{
       
       console.log(`the value of a is ${a} `+` and square is: ` +square.area(a));

       console.log(`the value of a is ${a} `+` and perimeter is: ` +square.paremiter(a));
}

calclutesquare(50);

const calsi1 = (a,b)=>{
      
       console.log(square.division(a,b));

       console.log(square.modules(a,b));
}

calsi1(50,100);




const calculate = (l,h)=>{
      
       console.log(`length and height is: ${l} and ${h} ` +`rectanglearea is: `+calsi.rectanglearea(l,h));

       console.log(`length and height is: ${l} and ${h} ` +`tringlearea  is: `+calsi.trianglearea(l,h));
}

calculate(12,10);

const circle = (r)=>{

	console.log(`circle trijya is: ${r}` +`circlearea is: `+file.circlearea(r));

       console.log(` circle trijya is: ${r} ` +`halfcirclearea  is:`+file.circle(r));

}

circle(12);

console.log(__filename);
console.log(__dirname);

