export default function Card({ children }) {
  return (
    <div className="block rounded-lg bg-gradient-to-tl hover:from-[#cecfd0] hover:to-[#edeeef] dark:hover:from-[#16222F] dark:hover:to-[#384C57] transition duration-300 ease-in-out hover:ease-in dark:from-[#16222A] dark:to-[#223945] from-[#dcddde] to-[#F9FAFB] shadow-md shadow-slate-900/20">
      <div className="bg-transparent p-6 my-4 rounded-lg transition duration-300 ease-in-out hover:ease-in">
        {children}
      </div>
    </div>
  );
}
