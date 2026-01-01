export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button',
  disabled = false 
}) {
  const baseStyles = 'rounded-xl px-6 py-3.5 font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-text-primary text-white hover:bg-text-primary/90 active:scale-95',
    secondary: 'bg-transparent border-[1.5px] border-gray-300 text-text-primary hover:border-text-primary hover:bg-soft-gray active:scale-95',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
