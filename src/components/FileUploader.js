import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Message from './msg';



const FileUploader = () => {

  const [ file, setFile] = useState('');
  const [ filename, setFilename] = useState('pic upload - main gallery');
  const [ uploadedFile, setUploadedFile] = useState({});
  const [ message, setMessage ] = useState('');


  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  }

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });

      const {fileName, filePath} = res.data;


      setUploadedFile({
        fileName,
        filePath
      });

      setMessage('File Uploaded successfully');
      setTimeout(() => setFilename('pic upload - main gallery', setMessage('') ), 3000
      );
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server.');
      } else {
        setMessage(err.response.data.msg);
      }
    }
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="uploader__container">
          <div className="uploader__box">
              <label className="uploader__label" htmlFor="choose-file">{filename}</label>
              <br></br>
              <div className="uploader__browse--wrapper">
                <input
                className="uploader__browse" type="file" id="choose-file" data-buttonText="Upload!" data-input="false"
                accept="image/png, image/jpg, image/jpeg" onChange={onChange}
                />
              </div>
              <div>
                <button className="uploader__button cancel" type="submit" value="submit">cancel</button>
                <input className="uploader__button" type="submit" value="submit" />
              </div>
              <div>{ message ? <Message msg={message} /> : null }</div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default FileUploader;
