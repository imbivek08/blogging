import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/features/themeSlice";
import { useEffect, useState } from "react";
export default function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  let { currentUser } = useSelector((state) => state.user);
  const themeData = useSelector((state) => state.theme);
  const navigate = useNavigate();
  const theme = themeData.theme;
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div>
      <Navbar className="border-b-2 whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white ">
        <Link to={"/"} className="self-center">
          <span className="px-3 py-1 bg-gradient-to-r text-white from-red-500 via-purple-700 to-pink-700 rounded-lg w-[200px]">
            Bivek
          </span>
          Blog
        </Link>
        {/* this will be hidden after small  size  */}
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text "
            placeholder="search"
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        {/* this will be hidden after large size  */}
        <Button className="h-10 w-12 lg:hidden  " pill color="gray">
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-3 md:order-2">
          <Button className="" pill color="gray">
            {theme === "light" ? (
              <FaMoon onClick={() => dispatch(toggleTheme())} />
            ) : (
              <BsFillMoonStarsFill onClick={() => dispatch(toggleTheme())} />
            )}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture || `https://ui-avatars.com/api/?name=${currentUser.username}&background=random`} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Dropdown.Divider />
              {/* <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item> */}
            </Dropdown>
          ) : (
            <Link to="/signin">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/project"} as={"div"}>
            <Link to="/project">Project</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/contact"} as={"div"}>
            <Link to="/contact">Contact</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
