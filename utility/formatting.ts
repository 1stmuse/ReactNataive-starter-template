export const filterWordLength = (name: string, length: number = 2) => {
    let splitNames = name.split(" ").filter(text => text.length);
    return (splitNames.length > length) ? splitNames.slice(0, length).join(" ") : name;
};

export const filterOnlyText = (text: string) => {
    const chars = '1234567890abcdefghijklmnopqrstuvwxyz'.split('');
    const stripped = text.split('').filter((char) => (char in chars));
    return stripped.join('');
}

export const formatName = (name: string, glue: string =  " ") => {
    const splitNames = name.replace("  ", ' ').trim().split(' ');
    return {
        normal: splitNames[0] + ' ' + splitNames[splitNames.length - 1],
        full: splitNames.join(glue),
        first: splitNames[0], 
        last: splitNames[splitNames.length - 1],
        middle: splitNames.length > 2 ? splitNames[1] : ""
    };
}

export const truncateText = (text: string, n: number, tail?: string) =>
text?.length > n ? text.substr(0, n - 1) + ".." + tail : text;

export const capitalizeString = (sentence: string): string => {
    return sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}