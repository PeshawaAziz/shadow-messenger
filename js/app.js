const CHAT_LIST = document.querySelector(".chat-list");
const CHAT_WINDOW = document.querySelector(".chat-window");
const MESSAGE_FORM = document.querySelector(".message-form");
const USERNAME_FORM = document.querySelector(".username-form");
const UPDATE_MSG = document.querySelector(".update-msg");
const CHATROOM = new Chatroom("general", "dudeNEW");
const CHAT_UI = new ChatUI(CHAT_LIST);

updateScroll();

CHATROOM.getChats((data) => {
    CHAT_UI.render(data);
});

// Adding new messages
MESSAGE_FORM.addEventListener("submit", (event) => {
    event.preventDefault();

    const MESSAGE = MESSAGE_FORM.message.value.trim();
    if (MESSAGE != "" || MESSAGE) {
        CHATROOM.addChat(MESSAGE)
            .then(() => {})
            .catch((error) => {
                console.log(error);
            });
    } else {
        MESSAGE_FORM.reset();
    }
});

// Updating the username
USERNAME_FORM.addEventListener("submit", (event) => {
    event.preventDefault();

    const NEW_NAME = USERNAME_FORM.username.value.trim();
    CHATROOM.updateName(NEW_NAME);

    USERNAME_FORM.reset();

    UPDATE_MSG.innerText = `Your username updated to ${NEW_NAME}`;
    setTimeout(() => {
        UPDATE_MSG.innerText = "";
    }, 3000);
});

function updateScroll() {
    CHAT_WINDOW.scrollTop = CHAT_WINDOW.scrollHeight;
}
