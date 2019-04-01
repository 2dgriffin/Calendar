var moment = require('moment'); //Able to use moment
var _ = require('lodash'); //Able to use Lodash


// //Get days in month
// function getDaysArrayByMonth() {
//     var daysInMonth = moment().daysInMonth();

  
//     while(daysInMonth) {
//       var current = moment().date(daysInMonth);
//       arrDays.push(current);
//       daysInMonth--;
//     }
  
//     return arrDays;
// }

// var updatedArrDays = [];
// var arrDays = [];



// //Test
// var schedule = getDaysArrayByMonth();
// schedule.forEach(function(arrDays) {
//   console.log(arrDays.format("MM/DD"));
// });

// var updatedArrDays = _.map([03/31], function(num){ return num; });



// console.log(updatedArrDays);

daysInMonth = moment().format('MM/DD')

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach(function (num) {
    var date = '2019' + (num<10 ? '0' + num : num.toString());
    console.log(date, 'has', moment(date.daysInMonth(), 'days'));
})

// startOfMonth = moment('2019-1').daysInMonth();
// endOfMonth   = moment('2019-12').daysInMonth();

// console.log(startOfMonth)
// console.log(endOfMonth)

// moment().format('DD/MM')

// moment().format('MMMM Do YYYY, h:mm:ss a');