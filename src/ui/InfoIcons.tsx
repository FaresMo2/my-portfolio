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
    <ul className="w-3/4 mx-auto space-y-10 my-14">
      {info.map((res) => (
        <li
          key={res.title}
          className="flex items-center cursor-pointer email"
          onClick={() => copyToClipboard(res.description)}
        >
          <span className="flex items-center justify-center mx-auto text-yellow-300 transition duration-300 rounded-lg cursor-pointer lg:mx-0 lg:mr-3 lg:w-10 lg:h-10 bg-zinc-900 hover:bg-zinc-700">
            {res.icon}
          </span>
          <div>
            <p className="hidden text-gray-50/80 lg:block">{res.title}</p>
            <p className="hidden text-gray-100 lg:block">{res.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default InfoIcons;
