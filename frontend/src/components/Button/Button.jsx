function Button({ children, variant = 'primary', onClick, type = 'button' }) {
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-700',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium transition-colors ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
