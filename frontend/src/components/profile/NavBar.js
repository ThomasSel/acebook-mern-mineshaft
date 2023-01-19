import UserProfile from "./userProfile";

const NavBar = (props) => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a
            className="font-lobster text-white text-center hover:text-blue-900 text-6xl"
            href="/posts"
            id="logo-link"
          >
            acebook
          </a>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className=" bg-blue-500 hover:bg-white text-white font-bold hover:text-blue-500 py-3 px-4 rounded-full"
            >
              Menu
            </label>
            <ul
              id="parent"
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="visible">
                <a href="/posts" id="feed-button">
                  Feed
                </a>
              </li>
              <li className="visible">
                <a onClick={props.logout} id="profile-logout-button">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
