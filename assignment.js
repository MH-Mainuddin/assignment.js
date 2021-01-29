//project-kilometerToMeter
function kilometerToMeter(meter){
    if(meter < 0){
        return "Enter a positive Number.Because distance cannot be a Negative ";
    }
    else{
        var kilometer = meter * 1000; // 1000 meter = 1 kilometer
        return kilometer;
    }
}


//project-budgetCalculator
function budgetCalculator(watch, phone, laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        return "Please give a valid value";
    }
    else{ 
        var totalCost = watch * 50 + phone * 100 + laptop * 500;
        return totalCost;
    }
}

var total = budgetCalculator(2, 5, 4);
console.log(total);

//project-hotelCost
function hotelCost(stay_days){
    if(stay_days < 0){
        return "Days cannot be less then Zero or negative ";
    }
    else if (stay_days <11){
       
        return  stay_days *100; 
    }
    else if(stay_days < 20){
        var AfterTenDays =stay_days -10;
        return (1000 +(AfterTenDays*80));
    }

    else {
        var AfterTwentyDays = stay_days -19;
        return (1720 +(AfterTwentyDays*50));
    }

}

//project-megaFriend
let friends = ['Akram', 'Mokim', 'Rashed'];

function megaFriend(friends){
  let largestName = friends[0];
  for(let i = 0; i < friends.length; i++ ){
    if(largestName.length < friends[i].length){
       largestName = friends[i];
       }    
  }
  return largestName;
}