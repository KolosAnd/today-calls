export const TimeFunc = (time,now) => {
    if(time == undefined)return ;
    const date = new Date(now);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let startDayTimeInMilisec = date - timeInMiliseconds(hours, minutes, seconds);

    function timeInMiliseconds(hours,minutes,seconds) {
        return ( (hours * 3600000) + (minutes * 60000) + (seconds * 1000));
    }

    let timeArr = time.split('');
    let timeHours = 0;
    let timeMinutes = 0;
    if(timeArr[0] === '0' && timeArr[1] === '0' ){
        timeHours = 0;
    } else if(timeArr[0] === '0' && timeArr[1] !== '0'){
        timeHours =  timeArr[1];
    } else {
        timeHours = timeArr[0] + timeArr[1];
    }
    if(timeArr[3] === '0' && timeArr[4] === '0' ){
        timeMinutes = 0;
    } else if(timeArr[3] === '0' && timeArr[4] !== '0'){
        timeMinutes =  timeArr[4];
    } else {
        timeMinutes = timeArr[3] + timeArr[4];
    }

    let callTimeInMilisec = timeInMiliseconds(timeHours,timeMinutes,0);
    return (startDayTimeInMilisec + callTimeInMilisec)

}