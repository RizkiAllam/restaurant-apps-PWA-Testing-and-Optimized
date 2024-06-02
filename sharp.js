/* eslint-disable comma-dangle */
/* eslint-disable indent */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'src/public/images/sharp');

if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
    sharp(`${target}/${image}`)
        .resize(800)
        .toFile(
        path.resolve(
            destination,
            `${path.parse(image).name}-large.jpg`,
        ),
        (err) => {
            if (err) {
            console.error('Error processing large image:', err);
            } else {
            console.log('Large image processed successfully:', image);
            }
        }
        );
    sharp(`${target}/${image}`)
        .resize(480)
        .toFile(
        path.resolve(
            destination,
            `${path.parse(image).name}-small.jpg`,
        ),
        (err) => {
            if (err) {
            console.error('Error processing small image:', err);
            } else {
            console.log('Small image processed successfully:', image);
            }
        }
    );
});
