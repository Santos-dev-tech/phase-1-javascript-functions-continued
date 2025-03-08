
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
} 
saturdayFun();
saturdayFun("bathe my dog");

(function () {
    console.log("Yet more razzling");
  });

    function mondayWork(activity = "go to the office") {
      return `This Monday, I will ${activity}.`;
    }
    mondayWork();

    function wrapAdjective(flair = "*") {
      return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
      };
    }
    wrapAdjective("%")("a dedicated programmer");
