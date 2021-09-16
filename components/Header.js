import Avatar from "./Avatar";
import { ViewGridIcon } from '@heroicons/react/solid'

function Header() {
    return (
      <div className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* icon */}
            <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

          {/* Avatar */}
          <Avatar url="https://avatars.githubusercontent.com/u/45689131?s=400&u=0eae419f0f1e274bd8316b1b8ad5ae7ff1d57c27&v=4" />
        </div>
      </div>
    );
}

export default Header
