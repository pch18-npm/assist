
export const random_str = (length: number = 32, chars_type: ('num' | 'yzm' | 'all') = 'all') => {
    var randStrChars = {
        num: '0123456789',
        yzm: 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',
        all: `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`
    };
    const chars = randStrChars[chars_type];
    let maxPos = chars.length;
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;

}


export const intPlus = (...num: any[]) => {
    let total = 0
    for (let n of num) {
        total += parseInt(n)
    }
    return total
}

