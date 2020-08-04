var jimp = require('jimp');

var images = ['images/input.jpeg', 'images/play-large.png', 'images/big-button.png']

var jimps = []

jimp.read(images[0]).then(image => {
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    console.log(width, height);
    jimp.read(images[1]).then(image => {
        image.contain(width, height)
        .quality(100)
        .write(images[2])
        for (var i = 0; i < images.length; i++) {
            jimps.push(jimp.read(images[i]))
        }
        Promise.all(jimps)
            .then((data) => {
                return Promise.all(jimps)
            })
            .then((data) => {
                data[0].composite(data[2], 0, 0)
                data[0].write('final-images/out-put.png', () => {
                    console.log('wrote the image')
                })
            })
    })
   
})



