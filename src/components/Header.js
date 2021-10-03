import { ReactComponent as SettingsIcon } from "../assets/001-settings.svg";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="h-16 px-5 flex justify-between items-center pt-8">
      <div className="flex items-center">
        <img
          src={logo}
          className="w-10 mr-3"
          style={{
            filter:
              "invert(27%) sepia(46%) saturate(3914%) hue-rotate(314deg) brightness(88%) contrast(96%)",
          }}
        />
        <div className="text-4xl font-bold bg-gradient-to-b from-pink-400 to-pink-700 bg-clip-text text-transparent">
          Fairy Pool
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="rounded-full border-2 border-accent px-6 py-1 text-sm text-accent font-semibold cursor-pointer">
          Connect Wallet
        </div>
        <SettingsIcon className="w-5 ml-3 cursor-pointer fill-accent" />
      </div>
    </div>
  );
}
