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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1 bg-blue-500 hover:bg-white text-white font-bold hover:text-blue-500 py-2 px-4 rounded-full">Menu</label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/posts">Feed</a></li>
            <li><a href="/login"
            id="logout-button">Logout</a></li>
          </ul>
        </div>
          {/* <button
            class="bg-blue-500 hover:bg-white text-white font-bold hover:text-blue-500 py-2 px-4 rounded-full"
            onClick={props.logout}
            id="logout-button"
          >
            Logout
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;