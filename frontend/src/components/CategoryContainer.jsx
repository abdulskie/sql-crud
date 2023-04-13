import { RiArrowDropDownLine } from "react-icons/ri";

const CategoryContainer = ({ isDropDownClicked, setIsDropDownClicked }) => {
  return (
    <div
      className="flex items-center justify-between p-4 w-full max-w-[45rem] md:m-auto hover:cursor-pointer"
      onClick={() => setIsDropDownClicked(!isDropDownClicked)}
    >
      <span>Category Name</span>
      <RiArrowDropDownLine
        className={!isDropDownClicked && `rotate-[270deg]`}
      />
    </div>
  );
};
export default CategoryContainer;
