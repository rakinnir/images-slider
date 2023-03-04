import { FaPlus } from "react-icons/fa"
export default function SearchBox() {
  return (
    <div className="searchbox">
      <input
        type="text"
        placeholder="&#xf002;  Search your tasks"
        className="searchbox_input"
      />
      <icon className="searchbox_add">
        <FaPlus />
      </icon>
    </div>
  )
}
