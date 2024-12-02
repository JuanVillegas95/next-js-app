// components/ServerComponent.tsx
"use server"
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { USER_ID } from "@/utils/constants";
// async function getFriendsNames(userId: string): Promise<string[]> {
//     try {
//         const userDocRef = doc(db, "users", userId);
//         const userDoc = await getDoc(userDocRef);

//         if (!userDoc.exists()) {
//             throw new Error("User not found");
//         }

//         const userData = userDoc.data();
//         const friendIds: string[] = userData?.friends || []; // Assuming `friends` is the array of IDs

//         if (friendIds.length === 0) {
//             return [];
//         }

//         // Step 3: Fetch all friend documents
//         const friendsQuery = query(
//             collection(db, "users"),
//             where("__name__", "in", friendIds)
//         );

//         const friendsSnapshot = await getDocs(friendsQuery);

//         return friendsSnapshot.docs.map((doc) => doc.data().username as string);
//     } catch (error) {
//         console.error("Error fetching friends' names:", error);
//         throw error;
//     }
// }

export default async function ServerComponent() {
    const userId = "3"; // Replace with the ID of the user you want to fetch friends for
    // let friendsNames: string[] = await getFriendsNames(userId);


    return (
        <div>
            hi
        </div>
    );
}
