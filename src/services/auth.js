import { auth, provider } from '../firebase';

export const signInWithGoogle = async () => {
	let user;
	await auth
		.signInWithPopup(provider)
		.then((res) => {
			user = res.user;
			console.log(user.displayName);
			console.log(user.email);
		})
		.catch((err) => {
			console.log(err.message);
		});

	return user;
};