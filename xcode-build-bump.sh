#!/usr/bin/env bash

# Set your project path here
PATH_TO_PLIST="ios/<YOUR_PROJECT>/Info.plist"

buildNumber=$(/usr/libexec/PlistBuddy -c "Print CFBundleVersion" ${PATH_TO_PLIST})
buildNumber=$(($buildNumber + 1))
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $buildNumber" ${PATH_TO_PLIST}
