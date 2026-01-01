export default function Header({ title, action }) {
  return (
    <header className="px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-text-primary">{title}</h1>
      {action && <div>{action}</div>}
    </header>
  );
}
