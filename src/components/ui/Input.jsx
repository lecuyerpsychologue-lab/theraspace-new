export default function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  name,
  id 
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-soft-gray border-[1.5px] border-transparent rounded-xl px-4.5 py-3.5 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-text-primary transition-colors w-full ${className}`}
    />
  );
}
