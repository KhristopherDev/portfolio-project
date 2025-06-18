import "./myNav.css";
import Emoji from "./emoji";

function MyNav() {
  const myOptions = ["Page1", "Page2", "Page3", "Page4"];
  const myOptionsLink = ["link1", "link2", "link3", "link4"];
  if (true) {
    <p>test</p>;
  }

  return (
    <>
      <div className="grid p-4 items-center justify-center mx-auto px-4 text-2xl font-bold">
        <div className="grid grid-cols-3 items-center justify-center content-center max-w-[1240px]">
          <div className="flex float-left items-center gap-1">
            <div className="bg-green-300 rounded-full">
              <img
                src="/logo.png"
                className="w-12 h-12 bg-transparent"
                alt="mylogo"
              />
            </div>
            <h1>Khristopher's Profile</h1>
          </div>
          <div className="grid justify-center">
            <Emoji />
          </div>
          <nav className="flex items-center gap-5 p-1 text-base">
            {/* <ul className="flex items-center gap-3 p-1 text-base">
              {myOptions.map((Option, OpIndex) => (
                <li>
                  <a href={myOptionsLink[OpIndex]}>{Option}</a>
                </li>
              ))}
            </ul> */}
            <button
              className="btn bg-[rgb(var(--main-color-2))] w-[6rem] h-[2rem] rounded-[2rem]"
              id="Contact"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MyNav;
