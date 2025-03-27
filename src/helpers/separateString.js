

const _separateString_bySepStr_rmBeginSpase = (inString = '', separator = ``) => {
    /**
     * This function replaces few spaces to one space if there are more than one space in one place
     * And separates string to array by $separator using .split() than.
     * Returns value type of array.
     */
    if (inString === "") return [];
    const string = inString.replace(/^ +| +$|( ) +/g,"");
    let arr = string.split(separator);

    return arr; // :[]
}

const rm_leftSpaces = (inString = '') =>
    inString.replace(/^ +| +$|( ) +/g,"");

const separateString = (string = "", separator = "", { rmBeginSpase = true }) => {
    if(rmBeginSpase) return _separateString_bySepStr_rmBeginSpase(string, separator);
    return _separateString_bySepStr_rmBeginSpase(string, separator); // затычка!
}

module.exports = {
    separateString,
    rm_leftSpaces
}