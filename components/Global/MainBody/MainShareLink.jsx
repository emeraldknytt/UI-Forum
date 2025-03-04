import React from "react";
import { BsBookmark } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { FaExpandArrowsAlt } from "react-icons/fa";
import toast from "react-hot-toast";


const MainShareLink = ({ DELETE_POST, postID, author, userAddress }) => {
  const creatorAction = [
    {
      name: "Edit Post",
      info: "Click to edit this post",
      icon: <FiEdit3 />,
      link: `?postEdit=${postID}&type=edit`,
    },
    {
      name: "Delete Post",
      info: "Click to delete this post",
      icon: <MdDeleteOutline />,
      link: postID,
    },
  ];

  const action = [
    {
      name: "Post Details",
      info: "GEt all the details post",
      icon: <BsBookmark />,
      link: `?postDetails=${postID}&type=details`,
    },
    {
      name: "Go Back",
      info: "click to Go back to homescreen",
      icon: <FaExpandArrowsAlt />,
      link: `#`,
    },
  ];

  return (
    <div
      class="dropdown-menu bg-grey dropdown-menu-start p-4 rounded-xxl border-0 shadow-lg"
      aria-labelledby="dropdownMenu4"
    >
      {creatorAction.map((list, index) => (
        <>
          {author?.toLowerCase() == userAddress ? (
            <div class="card-body rounded-xxxl bg-blue p-2 ps-3 mb-1 d-flex align-items-center cursor-pointer">
              <i class=" text-white me-4 font-sm">{list.icon}</i>
              {list.name == "Delete Post" ? (
                <h4
                  onClick={() => {DELETE_POST(list.link); toast.loading("Deleting Post...", { duration: 3000 });}}
                  class="fw-600 text-white  font-xssss mt-0 mb-0 me-4"
                >
                  {list.name}
                  {/* <span class="d-block font-xsssss fw-500 mt-1 mb-0 text-grey-500">
                    {list.info}
                  </span> */}
                </h4>
              ) : (
                <a
                  href={list.link}
                  class="fw-600 text-white cursor-pointer font-xssss mt-0 mb-0 me-4"
                >
                  {list.name}
                  {/* <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    {list.info}
                  </span> */}
                </a>
              )}
            </div>
          ) : (
            ""
          )}
        </>
      ))}

      {action.map((list, index) => (
        <div class="card-body rounded-xxxl bg-blue p-2 ps-3 mb-1 d-flex align-items-center cursor-pointer">
          <i class="text-white me-4 font-sm">{list.icon}</i>
          <a href={list.link} class="fw-600 text-white font-xssss mt-0 mb-0 me-4">
            {list.name}
            {/* <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
              {list.info}
            </span> */}
          </a>
        </div>
      ))}
    </div>
  );
};

export default MainShareLink;
