import { useOptimistic, useState, useTransition, useRef } from "react";
import { deliverMessage } from "./actions.js";
import s from './index.module.css'

export default function Index() {
  const [isPending, startTransition] = useTransition()
  const [messages, setMessages] = useState([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true
      }
    ]
  );
  const form = useRef(null);

  async function formAction(formData) {
    let newMessage = formData.get("message")
    form.current.reset()
    addOptimisticMessage(newMessage);
    startTransition(async () => {
      let message = await deliverMessage(newMessage);
      setMessages((messages) => [...messages, {text: message}])
    })
  }

  return (
    <>
      <form id={s.form} action={formAction} ref={form}>
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

      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
    </>
  );
}

