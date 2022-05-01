const {
    PurgeCSS
} = require("purgecss");
const fs = require("fs");


const arrContent = ['*.html', 'scripts/*.js']
const cssPurgeDir = "style"
const file1 = "./" + cssPurgeDir + "/stooge-purged.css"
const file2 = "./" + cssPurgeDir + "/stooge-responsive-purged.css"
const file3 = "./" + cssPurgeDir + "/stooge-colors-purged.css";


(async () => {

    const file1Results = await new PurgeCSS().purge({
        content: arrContent,
        css: ['style/stooge.css']
    });
    file1Results.forEach((result) => {
        const {
            css,
            file
        } = result;

        fs.stat(file1, (error, stats) => {
            // console.log(file1);
            fs.writeFileSync(file1, css);
            const newFileStats = fs.statSync(file1);
        });
    });


    const file2Results = await new PurgeCSS().purge({
        content: arrContent,
        css: ['style/stooge-responsive.css']
    });
    file2Results.forEach((result) => {
        const {
            css,
            file
        } = result;

        fs.stat(file2, (error, stats) => {
            // console.log(file2);
            fs.writeFileSync(file2, css);
            const newFileStats = fs.statSync(file2);
        });
    });


    const file3Results = await new PurgeCSS().purge({
        content: arrContent,
        css: ['style/stooge-colors.css']
    });
    file3Results.forEach((result) => {
        const {
            css,
            file
        } = result;

        fs.stat(file3, (error, stats) => {
            // console.log(file3);
            fs.writeFileSync(file3, css);
            const newFileStats = fs.statSync(file3);
        });
    });


})();
