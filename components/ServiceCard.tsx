export default function ServiceCard({title, children}:{title:string, children: React.ReactNode}){
  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="text-sm">{children}</div>
    </div>
  );
}
