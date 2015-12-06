#!/bin/bash

ember build --environment production
scp -r ./dist/* mjtrumbe@trumbell.net:lakeviewspeech.com/
