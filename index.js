// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(arr){
     arr = [...drivers];    
    return (arr.slice(0,2));

};

const returnLastTwoDrivers = function(last){
    last = [...drivers];    
   return (last.slice(2,4));

};

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(){
       return function(num){
        return  (num*num);
            
         }
}

function fareTripler(fares){
    return (fares * 3);
         
}

function fareDoubler(fares){
   return (fares * 2);
   
}

function selectDifferentDrivers([drivers],returnLastTwoDrivers){
    return returnLastTwoDrivers();
};
