import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './credentials';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const handleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Esto te dará un Google Access Token. Puedes usarlo para acceder a la API de Google.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // La información del usuario que ha iniciado sesión.
      const user = result.user;
      console.log(user, token);
      // ...
    }).catch((error) => {
      // Manejar los errores aquí.
      const errorCode = error.code;
      const errorMessage = error.message;
      // El correo electrónico de la cuenta del usuario utilizado.
      const email = error.email;
      // El tipo firebase.auth.AuthCredential que fue utilizado.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
      // ...
    });
}
export default handleSignIn;