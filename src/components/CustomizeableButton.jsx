export default function CustomizeableButton({ icon, label, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex items-center gap-2 rounded bg-indigo-500 px-3 py-1 text-white"
      >
        {icon}
        <span>{label}</span>
      </button>
    </div>
  );
}
