import { useSearchParams } from "react-router-dom";

// Define the interface for an individual option
interface Option {
  value: string;
  label: string;
}

// Update FilterProps to use the Option type for options
interface FilterProps {
  filterField: string;
  options: Option[];
}

// Define the functional component with typed props
function Filter({ filterField, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value: string): void {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center pl-2 mt-10 text-gray-100 gap-14">
      {options.map((option) => (
        <button
          onClick={() => handleClick(option.value)}
          className="transition duration-300 cursor-pointer hover:text-gray-400"
          key={option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
