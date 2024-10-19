

///////////////////////
const _thisDate = new Date(); //Tue Dec 26 2023 17:51:01 GMT+0300 (East Africa Time) (as of--- ToDay)
// const __thatDate = new Date("12/26/2023, 11:47:20 PM"); //.toLocaleString();getDay()[for days of that week] ;
// const _numDaysofMonth = (y, m) => new Date(y, m, 0).getDate(); //given of year# and month#

const _thisYear = _thisDate.getFullYear(); //2023
var _startofthisYear = new Date(_thisYear, 0, 1); //01,01 (Year(startMonth=01(_in_js:0),startDate=01(_in_js:1)))
var _endofthisYear = new Date(_thisYear, 11, 31); //12,31 (Year(endMonth=12(_in_js:11),endDate=31(_in_js:31)))

// var _previouseYear = _thisYear - 1; //previouse_yearnumber

const _thisNumMonthOfyear = _thisDate.getMonth(); //11 => NumberOf(Dec)

const _startofthisMonth = new Date(_thisYear, _thisNumMonthOfyear, 1);
const _endofthisMonth = new Date(_thisYear, _thisNumMonthOfyear + 1, 0);

// const numDaysofMonth = (y, m) => new Date(y, m, 0).getDate(); //given of year# and month#
/*
const _thisNumDayOfmonth = _thisDate.getDate(); //26 => day# of this month

const _thisNumDayOfWeek = _thisDate.getDay(); //2 => day# of this Week

const getHours = _thisDate.getHours(); //17 => of 17:51:01 ( the time)
const getMinutes = _thisDate.getMinutes(); //51 => of the time
//const getSeconds = _thisDate.getSeconds()(); //01 => of the time
*/
//toLocaleString ( 12/26/2023, 6:10:34 PM)
//toLocaleString('en-us',{month:'short/long', year:'numeric'})
//toLocaleDateString (12/26/2023)
//toDateString(Tue Dec 26 2023)
//toJSON(2023-12-26T15:09:59.598Z)
//toLocaleTimeString ( 6:16:26 PM )

const monthObj = Array.from({ length: 12 }, (e, i) => {
    return new Date(null, i, null).toLocaleDateString("en", {
      month: "short",
    }); //short || long
  });

// function _getDaysPeriod(){
//     let _thisM = {'dayo':_startofthisMonth,'dayz':_endofthisMonth}
//     return _thisM
//   }

// function _getMonthsPeriod(){
//     let _thisM = {'dayo':_startofthisMonth,'dayz':_endofthisMonth}
//     return _thisM
//   }

  // function _getYearsPeriod(){
  //   let _thisM = {'dayo':_startofthisMonth,'dayz':_endofthisMonth}
  //   return _thisM
  // }

var _getthismonth = () =>{ return {'daya':_startofthisMonth,'dayz':_endofthisMonth}}
var _getthisyear = () =>{ return {'daya':_startofthisYear,'dayz':_endofthisYear}}

const monthDataFilter = { //{  date: { $gte: "2022-01-01", $lte: "2022-12-30" },}
  updatedAt: {
    $gte: _getthismonth.daya,
    $lt: _getthismonth.dayz,
  },
};

const yearDataFilter = { //{  date: { $gte: "2022-01-01", $lte: "2022-12-30" },}
  updatedAt: {
    $gte: _getthisyear.daya,
    $lt: _getthisyear.dayz,
  },
};

export {monthObj,_getthismonth,_getthisyear,monthDataFilter,yearDataFilter}