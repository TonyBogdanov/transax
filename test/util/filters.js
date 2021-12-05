module.exports = {
    lowercase: v => `${ v }`.toLocaleLowerCase(),
    uppercase: v => `${ v }`.toLocaleUpperCase(),
    append: ( v, a, b ) => `${ v }${ a + b }`,
};
