var gulp = require('gulp');
var bump = require('gulp-bump');
var exec = require('child_process').exec;

gulp.task('patch-bump', function () {
    gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'));
});

gulp.task('minor-bump', function () {
    gulp.src('./package.json')
        .pipe(bump({type: 'minor'}))
        .pipe(gulp.dest('./'));
});

gulp.task('major-bump', function () {
    gulp.src('./package.json')
        .pipe(bump({type: 'major'}))
        .pipe(gulp.dest('./'));
});

// Make sure the file is excutable before trying this or it won't work
gulp.task('patch-xcode-version-number-bump', function (cb) {
    exec('./xcode-patch-version-bump.sh', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// Make sure the file is excutable before trying this or it won't work
gulp.task('minor-xcode-version-number-bump', function (cb) {
    exec('./xcode-minor-version-bump.sh', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// Make sure the file is excutable before trying this or it won't work
gulp.task('major-xcode-version-number-bump', function (cb) {
    exec('./xcode-major-version-bump.sh', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// Make sure the file is excutable before trying this or it won't work
gulp.task('bump-xcode-build-number', function (cb) {
    exec('./xcode-build-bump.sh', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// Make sure the file is excutable before trying this or it won't work
// NB should not be run by itself or it will go a version ahead - designed to be run as part of bump-all-versions
gulp.task('sync-android-version-and-build-numbers', ['bump-xcode-build-number'], function (cb) {
    exec('./sync-android-version-build-numbers.sh', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// Patches the package version number and bumps the ios and android build numbers but not version numbers
gulp.task('patch-all-versions', ['patch-bump', 'patch-xcode-version-number-bump', 'bump-xcode-build-number', 'sync-android-version-and-build-numbers']);

gulp.task('minor-bump-all-versions', ['minor-bump', 'minor-xcode-version-number-bump', 'bump-xcode-build-number', 'sync-android-version-and-build-numbers']);

gulp.task('major-bump-all-versions', ['major-bump', 'major-xcode-version-number-bump', 'bump-xcode-build-number', 'sync-android-version-and-build-numbers']);
