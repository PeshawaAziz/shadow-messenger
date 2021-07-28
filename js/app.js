const CHAT_LIST = document.querySelector(".chat-list");

const CHATROOM = new Chatroom("general", "dudeNEW");
const CHAT_UI = new ChatUI(CHAT_LIST);

CHATROOM.getChats((data) => {
    CHAT_UI.render(data);
});
