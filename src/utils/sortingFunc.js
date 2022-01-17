//по возростанию времени
export const sortTimeAscending = (a,b) =>  (a.milisec - b.milisec) ;

//по убиванию времени
export const sortTimeDescending = (a,b) => (b.milisec - a.milisec);

//по возростанию имени
export const sortNameAscending = (a,b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
} ;

//по убиванию имени
export const sortNameDescending = (a,b) => {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
};