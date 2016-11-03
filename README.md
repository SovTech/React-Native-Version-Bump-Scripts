# React-Native-Version-Bump-Scripts
A set of bash scripts and gulp tasks to bump android and ios version numbers

The scripts will patch/minor/major bump the version numbers of your node project and your ios project. Additionally there is a script to sync the android manifest version with the ios version from the project info.plist.

## How to use

1. In your project run:

`yarn add gulp && yarn add gulp-bump`

2. Change the paths to your project in all of the bash scripts

3. Run the gulp tasks to bump

eg:

`gulp patch-all-versions`

`gulp minor-bump-all-versions`

`gulp major-bump-all-versions`
