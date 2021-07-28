// Chatroom class (Adding new chat documents to Firebase)
class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = DATABASE.collection("chats");
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
}

const CHATROOM = new Chatroom("general", "dude1");
CHATROOM.addChat("Hello, WOW!")
    .then(() => {})
    .catch((error) => {
        console.log(error);
    });
