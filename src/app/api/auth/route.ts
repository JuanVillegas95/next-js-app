import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";

import { auth } from "@/config/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
  onAuthStateChanged,
  User,
} from "firebase/auth";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { providerName } = req.body;
  try {
    let userCredential;

    switch (providerName) {
      case "google":
        userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
        break;
      case "github":
        userCredential = await signInWithPopup(auth, new GithubAuthProvider());
        break;
      default:
    }
    cookies().set({
      name: "name",
      value: "lee",
      httpOnly: true,
      path: "/",
    });
    const jwt = await userCredential.user.getIdToken();

    // Set secure cookie
    res.setHeader(
      "Set-Cookie",
      `authToken=${jwt}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600`,
    );
    return res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Invalid credentials" });
  }
}
