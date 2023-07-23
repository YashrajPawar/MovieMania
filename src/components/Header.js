import { Link, NavLink } from "react-router-dom";

const Title = () => {
  return (
    <a className="Title" href="/">
      MovieMania
    </a>
  );
};

const Header = () => {
  const styleObj = {
    fontWeight: "lighter",
    color: "orange",
  };
  return (
    <div className="Header">
      <Title />
      <div className="NavItems">
        <h1 className="newReleaseLogo">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? styleObj : null)}
          >
            New Releases
          </NavLink>
        </h1>
        <h1 className="whatsHotLogo">
          <NavLink
            to="/popularmovies"
            style={({ isActive }) => {
              return isActive ? styleObj : null;
            }}
          >
            What's Hot
          </NavLink>
        </h1>
      </div>
    </div>
  );
};

export default Header;
