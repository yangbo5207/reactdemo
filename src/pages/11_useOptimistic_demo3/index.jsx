import { useOptimistic, useState, useTransition, useRef } from "react";
import { deliverMessage } from "./actions.js";
import s from './index.module.css'

export default function Index() {
  const [messages, setMessages] = useState([]);
  const form = useRef(null)

  async function formAction(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let newMessage = formData.get("message")
    let cur = {
      text: newMessage,
      sending: true
    }
    setMessages((messages) => [
      ...messages,
      cur
    ]);
    form.current.reset()
    let index = messages.length
    try {
      let message = await deliverMessage(newMessage);
      setMessages((messages) => {
        messages[index].sending = false;
        return [...messages]
      })
    } catch (e) {
      setMessages((messages) => {
        messages[index].sending = false;
        messages[index].error = true
        return [...messages]
      })
    }
  }

  return (
    <>
      <form id={s.form} onSubmit={formAction} ref={form}>
        <input
          type="text"
          name="message"
          placeholder="Hello!"
        />
        <button
          type="submit"
          style={{marginLeft: '10px'}}
        >Send</button>
      </form>

      {messages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
          {message.error && <button>retry</button>}
        </div>
      ))}
    </>
  );
}
