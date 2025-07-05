
// https://github.com/ozyurtyakup01/cs81-module4b-mydataexplorer.git

/*
Add comments in your code predicting:

Which day had the most screen time?
Tuesday
Best focus day?
Sunday
Is more caffeine helping?
Yes

*/

const weekData =
[
{day: "Monday", sleepHours:8, screenTime:3, mood:"Bad", caffeineIntake:3, focusLevel:6},
{day: "Tuesday", sleepHours:7, screenTime:4, mood:"Bad", caffeineIntake:3, focusLevel:4},
{day: "Wednesday", sleepHours:8, screenTime:4, mood:"Bad", caffeineIntake:5, focusLevel:8},
{day: "Thursday", sleepHours:7, screenTime:2, mood:"Bad", caffeineIntake:4, focusLevel:3},
{day: "Friday", sleepHours:6, screenTime:4, mood:"Bad", caffeineIntake:3, focusLevel:5},
{day: "Saturday", sleepHours:6, screenTime:4, mood:"Good", caffeineIntake:1, focusLevel:5},
{day: "Sunday", sleepHours:8, screenTime:6, mood:"Good", caffeineIntake:1, focusLevel:1},
] 

function findHighestScreenTime(log)
{
    let maxTime = null;
    let whichDay = log[0].day;
    //iterate each element    
    for (let index of log)
    {
        // if current index screentime higher than max
        if(index.screenTime > maxTime)
        {
            // new max time is current index
            maxTime = index.screenTime;
            whichDay = index.day;
        }
    }
    return whichDay + ", " + maxTime;
}

function averageSleep(log)
{
    let totalSleep = 0;
    //iterate each element 
    for (let index of log)
    {
        // add each elements sleepHours object to total
        totalSleep += index.sleepHours
    }
    //calculate average
    return ((totalSleep / log.length).toFixed(2));
}

function mostFrequentMood(log)
{
   // object to record frequency
  const frequency = {};
  // iterate each element of given log
  for (let index of log) 
    {
        // check if the element already counted
        if (!frequency[index.mood]) 
        {
        //if not, update count to 1
        frequency[index.mood] = 1;
        } 
        else 
        {
        // if already counted, increase count by 1
        frequency[index.mood]++;
        }
    }

  let mostFrequent = null;
  let maxCount = 0;
  for (let mood in frequency) {
    // if current element count greater then max,
    if (frequency[mood] > maxCount) 
    {
      // current element new most frequent
      mostFrequent = mood;
      // new max count is current element's count
      maxCount = frequency[mood];
    }
  }
  return mostFrequent;
}

function correlateCaffeineToFocus(log)
{
    let maxCaf = 0;
    let maxFocus = 0;  
    let maxCafDay = "";
    let maxFocusDay = "";

    for (let index of log)
    {   
        // Check max caffeine intake
        if(index.caffeineIntake > maxCaf)
        {
            maxCaf = index.caffeineIntake;
            maxCafDay = index.day;
        }

        // Check max focus
        if(index.focusLevel > maxFocus)
        {
            maxFocus = index.focusLevel;
            maxFocusDay = index.day;
        }
    }
    // Check if caffeine intake and focus level are related
    if(maxCafDay === maxFocusDay)
    {
        return maxFocusDay +" was most caffeine intake and focus level";
    }
    
    return "Max Focus Day: " + maxFocusDay +" Most Caffeine intake at: " + maxCafDay;
}

console.log("Average sleep time: ",averageSleep(weekData)," hours");
console.log("Highest Screen time: ",findHighestScreenTime(weekData)," hours");
console.log("Most frequent mood:", mostFrequentMood(weekData));
console.log(correlateCaffeineToFocus(weekData));
