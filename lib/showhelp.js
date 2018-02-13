module.exports = options => {
    console.error('Usage: sjr [-i input] [-o output|-d] [-t StreamClass] [-p plg [-p plg]...] mod1 [mod2] ...');
    console.error("    Options:");
    console.error("    -i --input   input - url to get, file path, empty or '-' for stdin, default: -");
    console.error("    -o --output  output - file path, '@' for print, empty or '-' for stdout, default: -");
    console.error("    -d --display short for -o @, passes the outcome of last module to console.log");
    console.error("    -t --type    stream type, default: StringStream");
    console.error("    -p --plugin  import plugin module (argument for require)");
    console.error("    module       a module that will be passed with the stream and should return a stream");
    console.error("                 the module should return an async function that will be called");
    console.error("                 the async function will then be awaited and passed to then next");

    if (process.env.DEBUG && process.env.DEBUG.match(/\bsjr\b/))
        console.error(Object.keys(options).map(x => x+': '+options[x]).join('\n'));
}
