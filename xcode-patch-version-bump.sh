#!/usr/bin/env bash

# Set your project path here
PATH_TO_PLIST="ios/<YOUR_PROJECT>/Info.plist"

VERSIONNUM=$(/usr/libexec/PlistBuddy -c "Print CFBundleShortVersionString" ${PATH_TO_PLIST})
NEWSUBVERSION=`echo ${VERSIONNUM} | awk -F "." '{print $3}'`
NEWSUBVERSION=$(($NEWSUBVERSION + 1))
NEWVERSIONSTRING=`echo ${VERSIONNUM} | awk -F "." '{print $1 "." $2 ".'${NEWSUBVERSION}'" }'`
/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString $NEWVERSIONSTRING" ${PATH_TO_PLIST}
