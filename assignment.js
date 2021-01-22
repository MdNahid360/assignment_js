//https://github.com/MdNahid360/js-assignment/tree/master
function kilometerToMeter(kmVScm) {
      var kilo = kmVScm * 1000;
       return kilo;
}

var result = kilometerToMeter(5);
console.log(result);



function budgetCalculator(watch, phone, laptop){
       var total = (watch * 50) + (phone * 100) + (laptop * 500);
       return total;
}
var yourPrice = budgetCalculator(2, 4, 3);
console.log(yourPrice);




function hotelCost(num){
       var day = 0;
       if(num <= 10){
              day = num * 100;
       }
   
       else if(num <=20){
              var  first = 10 * 100;
              var element = num - 10;
              var secound =  element * 80;
              day = first + secound;
       }
       else{
              var  first = 10 * 100;
              var secound =  10 * 80;
              var element = num - 20;
             
              var third = element * 50;
              day = first + secound + third;
       }
       return day;
   
   }
   var count = hotelCost(20);
   console.log(count);



   

function megaFriend(friends){
       var learg = friends [0];
       for(var i=0; i<friends.length; i++){
         var element = friends[i];
          if(friends.length < element.length){
                  learg = element;
          }

       } 
       return  learg;
}
var friends = ['nahid', 'mh murshed'];
var result = megaFriend(friends);
console.log(result);