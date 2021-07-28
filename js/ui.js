// ChatUI class (Get the data and render to the DOM)
class ChatUI {
    constructor(list) {
        this.list = list;
    }
    render(data) {
        const HTML_TEMP = `
        <li class="list-item">
            <span class="username fw-bold text-primary">${data.username}</span>
            <span class="message p-2 rounded-3 ">${data.message}</span>
            <div class="time">
            ${data.time.toDate().toLocaleDateString()}
            ${data.time.toDate().toLocaleTimeString()}
            </div>
        </li>
        `;

        this.list.innerHTML += HTML_TEMP;
        NEW_MESSAGE_FORM.reset();
        updateScroll();
    }
}
