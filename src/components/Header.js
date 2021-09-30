import { ReactComponent as SettingsIcon } from "../assets/001-settings.svg";

export default function Header() {
  return (
    <div className="h-16 px-5 flex justify-between items-center text-secondary">
      <div className="text-3xl font-black">DeFi PowerBall</div>
      <div className="flex justify-between items-center">
        <div className="rounded-full border-2 border-secondary px-6 py-1 text-xs font-black cursor-pointer">
          Connect Wallet
        </div>
        <SettingsIcon className="w-5 ml-3 cursor-pointer fill-secondary" />
      </div>
    </div>
  );
}
