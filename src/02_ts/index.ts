export let isValidTime =  function (hours: any, minutes: any) : any {
    if(hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59) return true;
    return false;
}