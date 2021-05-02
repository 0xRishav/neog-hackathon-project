import { auth, provider, db } from "../firebase";

export const signInWithGoogle = async () => {
  let user;
  await auth
    .signInWithPopup(provider)
    .then((res) => {
      user = res.user;
      console.log(res);
      console.log(user.displayName);
      console.log(user.email);
    })
    .catch((err) => {
      console.log(err.message);
    });
  const usersDb = db.collection("users");
  console.log("doest auth exist?..", auth);
  console.log("auth is ...", auth.currentUser);
  const { uid, photoURL, displayName, email } = auth.currentUser;
  await usersDb
    .doc(uid)
    .set({
      chatRoom: false,
      email: email,
      isHandRaised: false,
      isOnStage: false,
      name: displayName,
      photoUrl: photoURL,
    })
    .then(() => {
      console.log("User successfully written in Firestore!");
    })
    .catch((error) => {
      console.error("Error writing users document: ", error);
    });

  return user;
};
