function areYouPlayingBanjo(name) {

    var strName = name;

    if (strName.match(/[A-Z]/i)) {

        console.log(strName + " plays banjo");
        return strName + " plays banjo";
    }
    else {
        console.log(strName + " does not play banjo");
        return strName + " does not play banjo";
    }
}

console.log(areYouPlayingBanjo(''));

const areYouPlayingBanjo2 = (name) => (name[0].toLocaleLowerCase() === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;




