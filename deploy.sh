#!/bin/bash

ember build --environment production
scp -r ./dist/* $1:lakeviewspeech.com/
