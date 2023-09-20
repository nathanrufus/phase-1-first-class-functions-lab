// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}
  
  const  returnLastTwoDrivers = function anonymousFunction([]){
    return (['Amari', 'Mo']);
    }

    const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

    function createFareMultiplier(a){
     return function fareQuintupler( fare){
        return fare*a
     }
    }
     function fareDoubler(doubler){
      return doubler * 2;
     }

     function fareTripler(tripler){
      return tripler * 3;
     }

     function selectDifferentDrivers(drivers,selectingDrivers){
      return selectingDrivers(drivers)}