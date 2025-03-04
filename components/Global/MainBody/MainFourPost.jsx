import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";



//INTERNAL IMPRT
import { MainShareLink, MainSocialShare } from "./index";

const MainFourPost = () => {
  return (
    <div class="card w-100 mt-3 shadow-xss rounded-xxl border-0 p-4 mb-0">
      <div class="card-body p-0 d-flex">
        <figure class="avatar me-3">
          <img
            src="images/useracc-2.svg"
            alt="image"
            class="shadow-sm rounded-circle w45"
          />
        </figure>
        <h4 class="fw-700 text-blue font-xsss mt-1">
          User 4
          <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
            3 hour ago
          </span>
        </h4>
        <a
          href="#"
          class="ms-auto"
          id="dropdownMenu5"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class=" text-grey-900 btn-round-md bg-greylight font-xss">
            <BsThreeDots />
          </i>
        </a>

        <MainShareLink />
      </div>

      <div class="card-body p-0 me-lg-5">
        <p class="fw-600 text-grey-600 lh-26 font-xsss w-100 mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla
          dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus
          mollis pharetra. Proin blandit ac massa sed rhoncus
          <a href="#" class="fw-600 text-primary ms-2">
            See more
          </a>
        </p>
      </div>
      <div class="card-body d-block p-0 mb-3">
        <div class="row ps-2 pe-2">
          <div class="col-xs-6 col-sm-6 p-1">
            <a href="images/event-1.jpeg" data-lightbox="nacos">
              <img src="images/event-1.jpeg" class="rounded-3 w-100 h400" alt="image" />
            </a>
          </div>
          <div class="col-xs-6 col-sm-6 p-1">
            <a href="images/ticket-1.jpeg" data-lightbox="nacos">
              <img src="images/ticket-1.jpeg" class="rounded-3 w-100 h400" alt="image" />
            </a>
          </div>
        </div>
        <div class="row ps-2 pe-2">
          <div class="col-xs-4 col-sm-4 p-1">
            <a href="images/event-2.jpeg" data-lightbox="nacos">
              <img src="images/event-2.jpeg" class="rounded-3 w-100" alt="image" />
            </a>
          </div>
          <div class="col-xs-4 col-sm-4 p-1">
            <a href="images/event-4.jpeg" data-lightbox="nacos">
              <img src="images/event-4.jpeg" class="rounded-3 w-100" alt="image" />
            </a>
          </div>
          <div class="col-xs-4 col-sm-4 p-1">
            <a
              href="images/event-5.jpeg"
              data-lightbox="nacos"
              class="position-relative d-block"
            >
              <img src="images/event-5.jpeg" class="rounded-3 w-100" alt="image" />
              <span class="img-count font-sm text-white ls-3 fw-600">
                <b>+2</b>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="card-body d-flex align-items-baseline p-0">
        <a
          href="#"
          class="emoji-bttn d-flex cursor-pointer align-items-baseline fw-600 text-blue  font-xsss me-2"
        >
          <i class=" text-blue  me-1 btn-round-xs fs-1">
            <BiLike />
          </i>
          2.8K Upvotes
        </a>
        <div class="emoji-wrap">
          <ul class="emojis list-inline mb-0">
            <li class="emoji list-inline-item">
              <i class="em em---1"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-angry"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-anguished"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-astonished"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-blush"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-clap"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-cry"></i>
            </li>
            <li class="emoji list-inline-item">
              <i class="em em-full_moon_with_face"></i>
            </li>
          </ul>
        </div>
        <a
          href="#"
          class="d-flex align-items-baseline cursor-pointer fw-600 text-blue  font-xsss me-2"
        >
          <i class=" text-blue btn-round-sm fs-1">
            <FaRegComment />
          </i>
          <span class="d-none-xss">0 Comment</span>
        </a>
        <a
          href="#"
          id="dropdownMenu31"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          class="ms-auto d-flex align-items-baseline fw-600 text-blue  font-xsss me-2"
        >
        <i class="text-blue btn-round-sm fs-1">
          <AiOutlineShareAlt />
        </i>
          <span class="d-none-xs">Share</span>
        </a>

        <MainSocialShare />
      </div>
    </div>

    
  );
};

export default MainFourPost;
