const CHAT_LIST = document.querySelector(".chat-list");
const CHAT_WINDOW = document.querySelector(".chat-window");
const NEW_MESSAGE_FORM = document.querySelector(".new-message-form");

const CHATROOM = new Chatroom("general", "dudeNEW");
const CHAT_UI = new ChatUI(CHAT_LIST);

CHATROOM.getChats((data) => {
    CHAT_UI.render(data);
});

NEW_MESSAGE_FORM.addEventListener("submit", (event) => {
    event.preventDefault();

    const MESSAGE = NEW_MESSAGE_FORM.message.value.trim();
    CHATROOM.addChat(MESSAGE)
        .then(() => {
            updateScroll();
            NEW_MESSAGE_FORM.reset();
        })
        .catch((error) => {
            console.log(error);
        });
});

function updateScroll() {
    CHAT_WINDOW.scrollTop = CHAT_WINDOW.scrollHeight;
}
