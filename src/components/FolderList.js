import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Message from './msg';
const path = require('path');

const FolderList = () => {

  const [ newDir, setNewDir ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ folderList, setFolderList ] = useState([]);


// Fetch the array of directories on load
    useEffect(() => {
      try {
        (async () => {
          const res = await axios.get('/dirs');
          const folderRES = res.data;
          console.log(typeof(folderRES));
          console.log(folderRES);
          let temp = [];
          setFolderList(folderRES);
          // console.log( 'UE Folder RES ' + folderRES);
          // console.log('UE Folder LIST ' + folderList);
        })()

      } catch (err) {
        console.log(err);
      }
    }, []);


    const getValue = () => {
      const field = document.querySelector('#new-dir');
      setNewDir(field.value);
    }

    const showFolders = () => {
      const showButton = (val) => { return <button>{val}</button> };
      const buttons = folderList.map(showButton);

      return (
        <div>{buttons}</div>
      )
    }

    const createDir = async (e) => {
      if (folderList.lenght >= 20) {
        alert('nope');
        return;
      }


      e.preventDefault();
      const formData = new FormData();
      formData.append('dir', newDir);
      console.log(formData.dir);

      try {
        const res = await axios.post('/newdir', formData,{
          headers: {
            'content-type': 'multipart/form-data'
          }
      });

        const {dirName, folderList} = res.data;
        console.log(dirName, folderList);

        setMessage(`New folder named ${dirName} created successfully`);
        setTimeout(() => {setMessage('')}, 3000);
      } catch (err) {
        if (err.response.status === 500) {
          setMessage('There was a problem with the server.');
        } else {
          setMessage(err.response.data.msg);
        }
      }
    }







    return (
      <div className="list__container">
        <div>
          <div className="uploader__new-folder">
            <form onSubmit={createDir}>
              <input type="text" className="filename" id="new-dir" onChange={getValue} />
              <button type="submit" className="uploader__button">New folder</button>
            </form>

          </div>
          <div>{ message ? <Message msg={message} /> : null }</div>
          // <div>{createDir}</div>
        </div>
      <h4>Folders:</h4>
        <div className="list__box">
            {/* Here we will have a for each loop to create each button with name of folder. We will have to keep track of folder count  */}
            {showFolders()}
        </div>
      </div>
    )
}

export default FolderList;
