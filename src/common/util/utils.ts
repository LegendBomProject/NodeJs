export default class utils {
    static doSomething(val: string) { return val; }
    static delay = ms => new Promise(res => setTimeout(res, ms));

};

export const comparePasswords = async (userPassword, currentPassword) => {
    return await currentPassword === userPassword ? true : false ;
};
