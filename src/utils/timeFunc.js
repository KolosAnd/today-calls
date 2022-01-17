export const getTimeCall = (time,now) => {
    if(time == undefined)return ;
    const date = new Date(now);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let startDayTimeInMilisec = date - getMilisecondsFromTime( hours, minutes, seconds);

    let hoursNumber = (time[0]*10)+Number(time[1]);
    let minutesNumber = (time[3]*10)+Number(time[4]);

    if(typeof time == "number"){
        return (startDayTimeInMilisec + time);
    }

    return (startDayTimeInMilisec + getMilisecondsFromTime(hoursNumber,minutesNumber,0))
}


export function getMilisecondsFromTime(hours,minutes,seconds) {
    return ( (hours * 3600000) + (minutes * 60000) + (seconds * 1000));
}


// translate time ("14:25") to milisec
export const translateTimeStringToMiliseconds = (mmss) => {
    if(typeof mmss !== 'string') {
        if(mmss.toString()) mmss = mmss.toString();
        else throw new Error("Invalid input");
    }
    let hoursNumber = (mmss[0]*10)+Number(mmss[1]);
    let minutesNumber = (mmss[3]*10)+Number(mmss[4]);

    return getMilisecondsFromTime(hoursNumber,minutesNumber,0);

}