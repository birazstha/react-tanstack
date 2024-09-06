export default function Button({ children }) {
  return (
    <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
      {children}
    </button>
  );
}
