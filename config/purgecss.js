const {
    PurgeCSS
} = require("purgecss");
const fs = require("fs");


/* --------------------------------------------------------
 * This code is used with Stooge CSS to minimize the amount of CSS
 * in production files. It uses the 'purgecss' package.
 * These 4 variables are needed to control the output.
 */

/* List the files that have the class names in to this array.
 * They may be html or js files
 */
const arrContent = ['*.html', 'scripts/dom.js']

/* The outputted purged CSS goes to this directory */
const cssPurgeDir = "style"

/* The three specific Stooge CSS files */
const file1 = "./" + cssPurgeDir + "/stooge-purged.css"
const file2 = "./" + cssPurgeDir + "/stooge-responsive-purged.css"
const file3 = "./" + cssPurgeDir + "/stooge-colors-purged.css";

/* Instead of using the full CSS files, you can now use the purged file eg
  <link rel = "stylesheet" href = "./style/stooge-purged.css">
  <link rel = "stylesheet" href = "./style/stooge-responsive-purged.css">
  <link rel = "stylesheet" href = "./style/stooge-colors-purged.css">
*/

/* -------------------------------------------------------- */


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
