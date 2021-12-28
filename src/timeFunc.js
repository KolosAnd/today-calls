export const TimeFunc = (time,now) => {
    if(time == undefined)return ;
    const date = new Date(now);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let startDayTimeInMilisec = date - timeInMiliseconds(hours, minutes, seconds);

    let hoursNumber = (time[0]*10)+Number(time[1]);
    let minutesNumber = (time[3]*10)+Number(time[4]);

    if(typeof time == "number"){
        return (startDayTimeInMilisec + time);
    }

    return (startDayTimeInMilisec + timeInMiliseconds(hoursNumber,minutesNumber,0))
}

function timeInMiliseconds(hours,minutes,seconds) {
    return ( (hours * 3600000) + (minutes * 60000) + (seconds * 1000));
}

export const timeToMs = (mmss) => {
    if(typeof mmss !== 'string') {
        if(mmss.toString()) mmss = mmss.toString();
        else throw new Error("Invalid input");
    }
    let hoursNumber = (mmss[0]*10)+Number(mmss[1]);
    let minutesNumber = (mmss[3]*10)+Number(mmss[4]);

    return timeInMiliseconds(hoursNumber,minutesNumber,0);

}