import "./Header.css";
import { ReactComponent as SettingsIcon } from "../assets/001-settings.svg";

export default function Header() {
  return (
    <div className="Header">
      <div className="appTitle">DeFi PowerBall</div>
      <div className="rightSideHeader">
        <div className="connectWallet">Connect Wallet</div>
        <SettingsIcon />
      </div>
    </div>
  );
}
