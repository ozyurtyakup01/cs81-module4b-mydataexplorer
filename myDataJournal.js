/*

In myDataJournal.js, define an array named weekData with 7 objects, one for each day. Use your real or realistic data:

day (string)
sleepHours (number)
screenTime (hours)
mood (string)
caffeineIntake (cups)
focusLevel (1–10)

*/


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
    //iterate each element    
    for (let index of log)
    {
        // if current index screentime higher than max
        if(index.screenTime > maxTime)
        {
            // new max time is current index
            maxTime = index.screenTime;
        }
    }
}

function averageSleep()
{
    let totalSleep = null;
    //iterate each element 
    for (let index of log)
    {
        // add each elements sleepHours object to total
        totalSleep += index.sleepHours
    }
    //calculate average
    return totalSleep / log.length() + totalSleep % log.length();
}

function mostFrequentMood()
{
    
}

function correlateCaffeineToFocus()
{
    
}