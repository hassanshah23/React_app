import Profile from "./Profile";
import ShortcutsSection from "./Shortcut";

const LeftSide = () => {
  return (
    <div className="w-[400px] p-4 h-screen overflow-y-auto sticky top-16">
      <Profile />
      <hr className="my-4" />
      <ShortcutsSection />
    </div>
  );
};
export default LeftSide