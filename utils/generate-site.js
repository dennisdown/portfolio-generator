const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      // If there's an error, reject the Promise and send the error tot he Promise's '.catch()' method
      if (err) {
        reject(err);
        // Reutrn out fo the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // If everything went well, resolve the Promise and send the successful data to the '.then()' method
      resolve({
        ok: true,
        message: 'File Created!'
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./app.js', fileContent, err => {
      if(err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File Copied!'
      });
    });
  });
};
module.exports = { writeFile, copyFile};