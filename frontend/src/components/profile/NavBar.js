import UserProfile from "./userProfile";

const NavBar = (props) => {
  return (
    <>
      <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <a
            className="font-lobster text-white text-center hover:text-blue-900 text-6xl"
            href="/posts"
          >
            acebook
          </a>
        </div>
        <div>
          <button
            class="bg-blue-500 hover:bg-white text-white font-bold hover:text-blue-500 py-2 px-4 rounded-full"
            onClick={props.logout}
            id="logout-button"
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;