import Feed from "./Feed";
import Stories from "./Story";

const Mainside = () => {
  return (
    <div className="flex-1 max-w-2xl mx-auto p-4">
      <Stories />
      <Feed />
    </div>
  );
};

export default Mainside