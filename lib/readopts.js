/*eslint no-console: 0 */
let key = '';
module.exports = (argv, initial) => argv.reduce((acc, opt) => {
    if (!key && opt.startsWith('-')) {
        if (opt.startsWith('--')) {
            key = opt[2];
        } else {
            key = opt[1];
        }
    } else {
        key = key || '@';
        if (!(key in acc)) {
            console.error(`unknown option: ${opt}\n`);
            key = 'h';
        }
        if (!Array.isArray(acc[key])) {
            acc[key] = opt;
        } else {
            acc[key].push(opt);
        }
        key = '';
    }

    if (typeof acc[key] === 'boolean') {
        acc[key]=true;
        key = '';
    }

    return acc;
}, initial);
