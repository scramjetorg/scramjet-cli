# scramjet-cli

[![Greenkeeper badge](https://badges.greenkeeper.io/signicode/scramjet-cli.svg)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsignicode%2Fscramjet-cli.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsignicode%2Fscramjet-cli?ref=badge_shield)

Allows to run [scramjet](https://www.npmjs.com/package/scramjet) modules from command line facilitating input and output.

Install globally...

    npm install -g scramjet-cli

... and use:

    $ cat file.log | scr ./my-module > augmented.log


A module that fetches response body from each given url would look like this:

```javascript
    module.exports = (stream /* assumes StringStream */) => {
        return stream
            .lines()
            .parse(url.parse)
            .map(util.promisify(http.get))
            .catch(e => console.warn("Error in stream", e.stack))
            .map(x => JSON.parse(x));
    };
```

Full usage:

     Usage: scramjet [-i input] [-o output|-d] [-t StreamClass] [-p plg [-p plg]...] mod1 [mod2] ...
     Options:
     -i --input   input - url to get, file path, empty or '-' for stdin, default: -
     -o --output  output - file path, '@' for print, empty or '-' for stdout, default: -
     -d --display short for -o @, passes the outcome of last module to console.log
     -t --type    stream type, default: StringStream
     -p --plugin  import plugin module (argument for require)
     module       a module that will be passed with the stream and should return a stream
                  the module should return an async function that will be called
                  the async function will then be awaited and passed to then next

# License

MIT - [see LICENSE](./LICENSE)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fsignicode%2Fscramjet-cli.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fsignicode%2Fscramjet-cli?ref=badge_large)