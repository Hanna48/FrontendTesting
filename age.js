function GetAge(yearOfBirth) {
    const currentYear = 2020;
    return currentYear - yearOfBirth;
}

export default GetAge; //其他檔案如引入index.js，將可使用add此function