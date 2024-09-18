import { useState } from "react";
import toast from "react-hot-toast";
import { IoIosSend } from "react-icons/io";

// Regular expressions for email and username (full name)
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isValid = (): boolean => {
    let result: boolean = true;

    // Username validation
    if (name === "" || name === null) {
      result = false;
      toast.error("Please, Enter Your Name", {
        position: "top-right",
      });
    }

    // Email validation
    if (!emailRegex.test(email)) {
      result = false;
      toast.error("Please, enter a valid email", {
        position: "top-right",
      });
    }

    // Message
    if (message === "" || message === null) {
      result = false;
      toast.error("Please, enter a message", {
        position: "top-right",
      });
    }

    return result;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid()) {
      const formData = { name, email, message };

      try {
        const response = await fetch("https://formspree.io/f/xzzplpzz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success("Message Sent Successfully", {
            position: "top-center",
          });
          setName("");
          setEmail("");
          setMessage("");
        } else {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
          });
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("An error occurred. Please try again.", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="block w-3/4 mx-auto mt-20">
      {/* Form inputs */}
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
        <label htmlFor="message" className="mb-2 text-gray-100 cursor-pointer">
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
