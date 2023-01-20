const NavBar = (props) => {
  return (
    <>
      <nav className="fixed w-full top-0">
        <div className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a
              className="font-lobster text-white text-center hover:text-blue-900 text-6xl"
              href="/login"
              id="logo-link"
            >
              Mineshaft
            </a>
          </div>
        </div>
        <div className="h-12 bg-gradient-to-b from-white"></div>
      </nav>
    </>
  );
};

export default NavBar;
