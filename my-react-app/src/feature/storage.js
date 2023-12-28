import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import app from './credentials';

const storage = getStorage(app);
export { storage, ref, uploadBytes, getDownloadURL };
