import React from "react";
import { BiLike } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineContentCopy } from "react-icons/md";
import toast from "react-hot-toast";
//INTERNAL IMPRT
import { MainShareLink, MainSocialShare } from "./index";
import { shortenAddress } from "../../../utils/utils";

const MainTextPost = ({
  post,
  LIKE_POST,
  userAddress,
  DELETE_POST,
  setOpenComment,
  setCommentPostID,
  setAllPostComments,
}) => {
  //NOTIFICATION
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });

  const copyAddress = (address) => {
    navigator.clipboard.writeText(address);
    notifySuccess("Address Copied Successfully");
  };
  return (
    <div class="card w-100 shadow-xss rounded-xxl border-0 p-4 mb-0 new_margin">
      <div class="card-body p-0 d-flex">
        <figure class="avatar me-3">
          <img
            src={`images/${
              post.author.toLowerCase() == userAddress ? "you" : "user"
            }.png`}
            alt="image"
            class="shadow-sm rounded-circle w45"
          />
        </figure>
        <h4 class="fw-700 text-blue font-xsss mt-1">
          {shortenAddress(post.author)}
          <MdOutlineContentCopy onClick={() => copyAddress(post.author)} />
          <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
            {new Date(post.timeCreated * 1000).toDateString()}
          </span>
        </h4>
        <a
          href="#"
          class="ms-auto"
          id="dropdownMenu6"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="text-grey-900 btn-round-md bg-greylight font-xss">
            <BsThreeDots />
          </i>
        </a>
        <MainShareLink
          userAddress={userAddress}
          author={post.author}
          DELETE_POST={DELETE_POST}
          postID={post.postID}
        />
      </div>
      <div class="card-body p-0 me-lg-5">
        <p class="fw-600 text-grey-600 lh-26 font-xsss w-100 mb-2">
          {post.postDescription}
        </p>
      </div>
      <div class="card-body d-flex align-items-baseline p-0">
        <a
          onClick={() => LIKE_POST(post.postID)}
          class="emoji-bttn d-flex cursor-pointer align-items-baseline fw-600 text-blue font-xsss me-2"
        >
          <i class="text-blue me-1 btn-round-xs fs-1">
            <BiLike />
          </i>
          {post.likes} Upvotes
        </a>

        <a
          onClick={() => (
            setOpenComment(true),
            setCommentPostID(post.postID),
            setAllPostComments(post.comments)
          )}
          class="d-flex align-items-baseline cursor-pointer fw-600 text-blue font-xsss me-2"
        >
          <i class="text-blue btn-round-sm fs-1">
            <FaRegComment />
          </i>
          <span class="d-none-xss">{post.comments.length} Comment</span>
        </a>
        <a
          href="#"
          id="dropdownMenu31"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          class="ms-auto d-flex align-items-baseline fw-600 text-blue font-xsss me-2"
        >
          <i class="text-blue btn-round-sm fs-1">{" "}
            <AiOutlineShareAlt />
          </i>
          <span class="d-none-xs">Share</span>
        </a>

        <MainSocialShare postID={post.postID} />
      </div>
    </div>
  );
};

export default MainTextPost;
