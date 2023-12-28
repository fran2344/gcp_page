import React, { useState } from 'react';
import { storage, ref, uploadBytes, getDownloadURL }  from '../../feature/storage';  // Asegúrate de importar storage desde tu configuración de Firebase

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const storageRef = ref(storage, `files/${file.name}`);

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');

      getDownloadURL(snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        // Aquí puedes hacer cosas como actualizar el estado con la URL del archivo,
        // enviar la URL a tu base de datos, etc.
      });
    });
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onUpload}>Upload File</button>
    </div>
  );
};

export default FileUpload;

