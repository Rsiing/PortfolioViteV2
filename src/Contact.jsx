import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

function Contact() {

  
  const [text, setText] = useState("");

  const sendMsg = () => {
    if (text.trim() !== "") {
      const serviceID = "service_0wscqwz";
      const templateID = "template_dkw4vhd";
      const publicKey = "DbK5v9cllBoDFiuyY";

      const templateParams = {
        message: text,
        to_email: "ryansingleton96@ymail.com"
      };

      emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          alert("Message sent!");
          setText("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message.");
        });
    }
  };

  const clearMsg = () => {
    setText("");
  };

  return (
    <div className='h-200 w-full bg-slate-950 border-t-8 border-white cursor-default'>
        <div className='h-140 w-260 rounded-3xl flex-col  border-8 border-white flex justify-self-center mt-30 p-14'>
          <div className='text-white text-6xl pb-4 font-mono flex flex-row justify-between tracking-tight'>
            <h2>Contact me</h2>
            <h2>Send a message</h2>
          </div>
          <div className='grid grid-cols-2 h-full pt-4'>
            <div className='flex flex-col gap-22 font-mono text-white text-4xl cursor-pointer'>
              <a href="https://www.linkedin.com/in/ryan-singleton-676196325/">
                <h3 className='hover:text-blue-500 hover:underline  duration-500 gap-8 flex items-center'>
                  <FaLinkedin className='text-white text-5xl hover:scale-200 hover:text-blue-500 duration-500'/>Linkedin
                </h3>
              </a>
              <a href="mailto: singletonrcc@gmail.com">
                <h3 className='hover:text-blue-500 hover:underline  duration-500 gap-8 flex items-center'>
                  <FaEnvelope className='text-white text-5xl hover:scale-200 hover:text-blue-500 duration-500'/>Email
                </h3>
              </a>
              <a href="https://github.com/Rsiing/">
                <h3 className='hover:text-blue-500 hover:underline  duration-500 gap-8 flex items-center'>
                  <FaGithub className='text-white text-5xl hover:scale-200 hover:text-blue-500 duration-500'/>Github
                </h3>
              </a>
            </div>
            <div className='border-transparent border-4 hover:border-blue-500 duration-500 cursor-text rounded-xl relative left-2'>
              <textarea onChange={(e) => setText(e.target.value)}
               value={text}
               className='w-full h-68 resize-none text-3xl font-mono px-2 py-4 outline-none text-white'/>
              <div className='text-white text-2xl font-mono flex justify-around '>
                <button className='p-2 bg-transparent rounded-2xl cursor-pointer hover:bg-blue-500 duration-500' onClick={sendMsg}>send</button>
                <button className='p-2 bg-transparent rounded-2xl cursor-pointer hover:bg-blue-500 duration-500' onClick={clearMsg}>clear</button>
              </div>  
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Contact



