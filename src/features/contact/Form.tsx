import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosSend } from "react-icons/io";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isValid = (): boolean => {
    let result: boolean = true;
    if (name === null || name === "") {
      result = false;
      toast.error("Please, Enter Your Name", {
        position: "top-right",
      });
    }
    if (email === null || email === "") {
      result = false;
      toast.error("Please, Enter Your Email", {
        position: "top-right",
      });
    }
    if (message === null || message === "") {
      result = false;
      toast.error("Please, Enter A Message", {
        position: "top-right",
      });
    }

    return result;
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isValid()) {
      toast.success("Message Sent Successfully", {
        position: "top-center",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="block w-3/4 mx-auto mt-20">
      <div className="flex flex-wrap gap-20 mb-10 input-text">
        <div className="flex flex-col w-[400px]">
          <label htmlFor="name" className="mb-2 text-gray-100 cursor-pointer">
            Full name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-2 py-3 bg-transparent border border-gray-100 rounded-sm outline-none name cursor-text caret-gray-100 text-gray-50 "
            type="text"
            id="name"
            placeholder="Full name"
          />
        </div>
        <div className="flex flex-col w-[400px]">
          <label htmlFor="email" className="mb-2 text-gray-100 cursor-pointer">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2 py-3 bg-transparent border border-gray-100 rounded-sm outline-none cursor-text caret-gray-100 text-gray-50"
            type="text"
            id="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label htmlFor="name" className="mb-2 text-gray-100 cursor-pointer">
          Your Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="inline-block p-2 bg-transparent border border-gray-100 outline-none h-44 cursor-text caret-gray-100 text-gray-50"
          placeholder="Write a message"
        />
      </div>

      <button className="flex items-center justify-center gap-2 px-3 py-4 mt-20 ml-auto font-bold text-gray-200 border border-yellow-300 rounded-md w-44">
        <IoIosSend color="yellow" /> Send Message
      </button>
    </form>
  );
}

export default Form;
