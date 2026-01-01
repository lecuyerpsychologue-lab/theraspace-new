export default function ProgressBar({ value = 0, color = '#8B9F82', className = '' }) {
  const percentage = Math.min(Math.max(value, 0), 100);

  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className="h-full rounded-full transition-all duration-500 ease-out"
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
}
