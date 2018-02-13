#!/bin/bash

echo "Scramjet CLI";

sjr=$( readlink -f $(dirname $0)/../bin/scramjet-run )

assertEqual() {
    if [[ `$1` == $2 ]] ; then
        echo -ne "\t✓ passed - "
        echo $3
    else
        echo -ne "\t✗ failed - "
        echo $3
        exit 80
    fi
}

OPWD=$PWD

cd $( dirname $0 )

assertEqual "$sjr -i fs/file.txt -d ./fs/module" 45 "Display a single number from a single stream";


cd $PWD
