const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;