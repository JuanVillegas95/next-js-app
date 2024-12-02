const { getFirestore, doc, setDoc } = require("firebase/firestore");

const db = getFirestore();

const newUser = {
  email: "juanemail2001@example.com",
  username: "Juan Villegas",
  friends: {
    "friend1@example.com": "Friend One",
    "friend2@example.com": "Friend Two",
  },
  calendars: {
    "3d31fa19-ec4b-4e5c-a70": {
      name: "personal",
      timezone: "mexico mty",
      events: {
        "e-b98ea782a91b12345": {
          date: "10",
          startHours: 9,
          startMinutes: 30,
          endHours: 11,
          endMinutes: 0,
          color: "blue",
          icon: "calendar",
          title: "Team Meeting",
          description: "Weekly team meeting to discuss project updates",
          groupId: "A1",
          groupStarts: "2024-12-01T09:30:00Z",
          groupEnds: "2024-12-01T11:00:00Z",
        },
      },
    },
  },
};

const addUser = async () => {
  try {
    await setDoc(doc(db, "users", "uniqueUserId"), newUser);
    console.log("User added successfully!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

addUser();
