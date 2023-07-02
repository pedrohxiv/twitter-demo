export default function SidebarRow({
  Icon,
  title,
}: {
  Icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition duration-200 ease-out group max-w-fit cursor-pointer">
      <>{Icon}</>
      <p className="hidden md:inline-flex group-hover:text-twitter transition duration-200 text-base font-light lg:text-xl">
        {title}
      </p>
    </div>
  );
}
