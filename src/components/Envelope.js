import React from "react";
import "./envelope.css";

function Envelope() {
  const data = {
    sender: {
      name: "Mr. Sender",
      address: "123 Folks St.",
      city: "Boston, MA 02118",
    },
    receiver: {
      name: "Mr. Receiver",
      address: "123 Folks St.",
      city: "San Francisco, CA 94101",
    },
  };
  return (
    <div className="wrapper">
      <div className="sender">
        <div>{data.sender.name}</div>
        <div>{data.sender.address}</div>
        <div>{data.sender.city}</div>
      </div>
      <div className="receiver">
        <div>{data.receiver.name}</div>
        <div>{data.receiver.address}</div>
        <div>{data.receiver.city}</div>
      </div>
      <div className="img">STAMP</div>
    </div>
  );
}
export default Envelope;
