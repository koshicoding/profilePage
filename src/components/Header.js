import profile from "../images/portfolio.jpeg";

export default function Header() {
  return (
    <div className="header">
      <img className="profilePic" src={profile} alt="Italian Trulli"></img>
    </div>
  );
}
