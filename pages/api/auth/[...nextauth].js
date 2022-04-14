import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {db} from "../../../firebase";
import FirebaseAdapter from '@next-auth/firebase-adapter'

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		// ...add more providers here
		//
	],
//	adapter: FirebaseAdapter(db)
});
