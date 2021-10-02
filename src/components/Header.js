import { ReactComponent as SettingsIcon } from "../assets/001-settings.svg";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="h-16 px-5 flex justify-between items-center pt-8">
      <div className="flex items-center">
        <img
          src={logo}
          className="w-14 mr-3"
          style={{
            filter:
              "invert(87%) sepia(23%) saturate(147%) hue-rotate(210deg) brightness(102%) contrast(99%)",
          }}
        />
        <div className="text-3xl font-black text-purple-100">Fairy Pool</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="rounded-full border-2 border-accent px-6 py-1 text-xs text-accent font-black cursor-pointer">
          Connect Wallet
        </div>
        <SettingsIcon className="w-5 ml-3 cursor-pointer fill-accent" />
      </div>
    </div>
  );
}
