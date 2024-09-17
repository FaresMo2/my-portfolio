import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import toast from "react-hot-toast";

const info = [
  {
    icon: <IoIosMail size={20} />,
    title: "Email",
    description: "faresmohamed698@gmail.com",
  },
  {
    icon: <FaPhoneAlt size={15} />,
    title: "Phone",
    description: "+20 (114) 592-3200",
  },
  {
    icon: <FaAddressBook size={18} />,
    title: "Address",
    description: "Cairo, Egypt",
  },
];

function InfoIcons() {
  const copyToClipboard = (text: string): void => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${text} copied!`); // Show a little alert for feedback
    });
  };

  return (
    <ul className="w-3/4 mx-auto my-14 space-y-10">
      {info.map((res) => (
        <li
          key={res.title}
          className="email flex items-center cursor-pointer"
          onClick={() => copyToClipboard(res.description)}
        >
          <span className="flex items-center justify-center h-10 w-10 rounded-lg mr-3 text-yellow-300 bg-zinc-900 cursor-pointer transition duration-300 hover:bg-zinc-700">
            {res.icon}
          </span>
          <div>
            <p className="text-gray-50/80">{res.title}</p>
            <p className="text-gray-100">{res.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default InfoIcons;
