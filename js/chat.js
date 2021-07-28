// Chatroom class (Adding new chat documents to Firebase)
class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = DATABASE.collection("chats");
        this.unsub;
    }
    async addChat(message) {
        const NOW = new Date();
        const CHAT = {
            message,
            username: this.username,
            room: this.room,
            time: firebase.firestore.Timestamp.fromDate(NOW),
        };
        const RESPONSE = await this.chats.add(CHAT);
        return RESPONSE;
    }
    // Realtime listener (Getting the data with every change)
    getChats(callback) {
        this.unsub = this.chats
            .where("room", "==", this.room)
            .orderBy("time")
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type == "added") {
                        // Updating the UI
                        callback(change.doc.data());
                    }
                });
            });
    }
    updateName(newName) {
        this.username = newName;
    }
    // Updating the room based on the input
    updateRoom(newRoom) {
        this.room = newRoom;
        if (this.unsub) {
            this.unsub();
        }
    }
}
