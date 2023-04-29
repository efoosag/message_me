import consumer from "channels/consumer"
import { scroll_bottom } from "../application.js"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#message_details').append(data['chat_message'])
    scroll_bottom();
  }
});
