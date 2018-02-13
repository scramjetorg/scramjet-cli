#!/usr/bin/env sjr

module.exports = (stream) =>
    stream
        .lines()
        .prepend('x> ')
;
