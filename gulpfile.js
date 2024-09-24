import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);


import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminWebp from 'imagemin-webp';



function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('src/images/*') // Atualizado para capturar todos os arquivos
        .pipe(imagemin([], { verbose: true }))
        .pipe(gulp.dest('dist/images'));
}

function webpImages() {
    return gulp.src('src/images/*') // Atualizado para capturar todos os arquivos
        .pipe(imagemin([
            imageminWebp({ quality: 50 })
        ], { verbose: true }))
        .pipe(gulp.dest('dist/images'));
}

export default gulp.parallel(styles, images, webpImages);

export function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/images/*', gulp.parallel(images));
    gulp.watch('./src/images/**/*.webp', gulp.parallel(webpImages));
}
