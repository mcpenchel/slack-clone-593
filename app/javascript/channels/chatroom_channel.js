import consumer from "./consumer";

const initChatroomCable = () => {
  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;

    console.log("I've just subscribed! Nice.")

    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(data) {
        messagesContainer.insertAdjacentHTML("beforeend", data);
        // If you wanted to scroll down for the users
        // who received the message, for example,
        // that code would be in here! In the callback.
      },
    });
  }
}

export { initChatroomCable };