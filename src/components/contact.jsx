import React from "react";
import { CONTACT } from "../constants";

export default function Contact() {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>

      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>

        <a href="#" className="my-4">
          {CONTACT.phoneNo}
        </a>

        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}
