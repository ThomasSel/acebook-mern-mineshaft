const NavBar = (props) => {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a
            className="font-lobster text-white text-center hover:text-blue-900 text-6xl"
            href="/login"
            id="logo-link"
          >
            acebook
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
