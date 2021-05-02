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
      photoUrl: photoURL
    })
    .then(() => {
      console.log("User successfully written in Firestore!");
    })
    .catch((error) => {
      console.error("Error writing users document: ", error);
    });

  return user;
};

auth()
  .setPersistence(auth.Auth.Persistence.NONE)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return auth().signInWithPopup(provider);
  })
  .catch((error) => {
    console.log("error is...", error.message);
  });

// export const signInWithGoogle = async () => {
//   try {
//     let user;
//     console.log("waiting for users response...");
//     const res = await auth.signInWithPopup(provider);
//     user = res.user;
//     console.log("res is...", res);
//     console.log("user is...", user.displayName);
//     console.log("email is...", user.email);
//     const usersDb = db.collection("users");
//     console.log("doest auth exist?..", auth);
//     console.log("auth is ...", auth.currentUser);
//     const { uid, photoURL, displayName, email } = auth.currentUser;

//     console.log({ uid, photoURL, displayName, email });
//     return user;
//   } catch (err) {
//     console.log(err.message);
//   }
// };
