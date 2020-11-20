

// Reference only. Actual server file is one directory level up from project


// const express = require('express');
// const fileUpload = require('express-fileupload')
// const fs = require('fs');

// const app = express();

app.use(fileUpload());

app.listen(5000, () => console.log('server started'));


// Upload a new file ------------------------------------------
app.post('/upload', (req, res) => {

  // First make sure there was a file submitted, respond 400 if not
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  // grab the file and assign it to a variable called file
  const file = req.files.file;

  // Move it to the chosen directory
    file.mv(`${__dirname}/first/public/uploads/main/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

    res.json({ fileName: file.name, filePath: `/uploads/main${file.name}` });
    });

  });



  // Create new directory --------------------------------------------
  app.post('/newdir', (req, res) => {

    // First make sure there was a directory name submitted, respond 400 if not
    if (req === null) {
      return res.status(400).json({ msg: 'No directory specified' });
    }


    const dir = req.body.dir;

    fs.mkdir(`./first/public/uploads/folders/${dir}`, err => {
        if (err) {r
          console.error(err);
          return res.status(500).send(err);
        }});

    const folders = fs.readdirSync('./first/public/uploads/folders');

      res.json({ dirName: dir, folderList: folders });
      });



    // Get an array list of folders in the folders directory.
    app.get('/dirs', (req, res) => {

      const folders = fs.readdirSync('./first/public/uploads/folders');
      // const foldersJSON = JSON.stringify(folders);

        res.json(folders);
        });







  // Delete a directory -----------------------------------------------
