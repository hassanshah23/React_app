import Contacts from "./Contacts";
import Sponsored from "./Sponser";

const Rightside = () => {
  return (
    <div className="w-[400px] p-4 h-screen overflow-y-auto sticky top-16">
      <Sponsored />
      <Contacts />
    </div>
  );
};

export default Rightside