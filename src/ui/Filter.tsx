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
  const searchParams = useSearchParams();

  function handleClick(value: string): void {
    // Create a new URLSearchParams object
    const newSearchParams = new URLSearchParams(searchParams.toString());

    // Set the filter field in the new search params
    newSearchParams.set(filterField, value);

    // Update the search params
    window.history.replaceState(null, "", `?${newSearchParams.toString()}`);
  }

  return (
    <div className="flex items-center gap-14 pl-2 mt-10 text-gray-100">
      {options.map((option) => (
        <button
          onClick={() => handleClick(option.value)}
          className="cursor-pointer transition duration-300 hover:text-gray-400"
          key={option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
