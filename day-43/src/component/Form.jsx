import React, { useState } from "react";

function MyForm() {



  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSending(true)
        await setMessage(status)
        setIsSending(false)
        setIsSent(true)
    }

    if(isSent) {
        return <h1>Thanks for feedback</h1>
    }

    function setMessage(status) {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        })
    }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Enter your message:</label>
      <br />
      <textarea id="message" name="message" value={status} onChange={(e) => setStatus(e.target.value)}></textarea>
      <br />
      <input type="submit" value="Submit" />
      <div>{status}</div>
    </form>
  );
}

export default MyForm;
