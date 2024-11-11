const Navbar = () => {
  // Navbar data array
  const navLinks = [
    {
      name: "Home",
      href: "/",
      menu: [
        { title: "OPTION 1" },
        { title: "OPTION 2" },
        { title: "OPTION 3" },
        { title: "OPTION 4" },
      ],
    },
    {
      name: "Pages",
      href: "/pages",
      menu: [
        { title: "OPTION 1" },
        { title: "OPTION 2" },
        { title: "OPTION 3" },
        { title: "OPTION 4" },
      ],
    },
    {
      name: "Blog",
      href: "/blog",
      menu: [
        { title: "OPTION 1" },
        { title: "OPTION 2" },
        { title: "OPTION 3" },
        { title: "OPTION 4" },
      ],
    },
    {
      name: "Shop",
      href: "/shop",
      menu: [
        { title: "OPTION 1" },
        { title: "OPTION 2" },
        { title: "OPTION 3" },
        { title: "OPTION 4" },
      ],
    },
  ];
  return (
    <nav>
      <div className="bg-white h-28 shadow-xl flex w-full relative z-20 top-0">
        <div className="flex my-auto w-full justify-between mx-20">
          <div>
            <h1 className="text-3xl font-semibold">Bootgrow</h1>
          </div>
          <div className="inline-block w-1/2 my-auto text-center text-lg align-middle">
            <ul className="space-x-10 h-auto">
              {navLinks.map((links, index) => (
                <li
                  index={index}
                  className="inline-block h-full group px-1 py-1 border-transparent border-b-4 hover:border-blue-600"
                >
                  <div className="absolute w-16 h-32 group"></div>
                  <a className="inline-block" href={links.href}>
                    {links.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 group-hover:text-blue-500 inline-block ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </a>
                  <ul className="dropdown ">
                    {links.menu.map((items, index) => (
                      <li
                        className="py-3 bg-gradient-to-tr hover:from-purple-500 hover:to-blue-500 rounded-lg hover:text-white duration-200"
                        key={index}
                      >
                        <a href="/"> {items.title}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
