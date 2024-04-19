export default function TabButton({ children, onSelect, isSelected }) {
    // console.log('TABBUTTON COMPONENT EXECUTING');
    return (
      <li className="p-2">
        <button className={isSelected ? 'bg-[#bc6c25] p-1.5 rounded' : "bg-[#d4a373] p-1.5 rounded "} onClick={onSelect}>
          {children}
        </button>
      </li>
    );
  }