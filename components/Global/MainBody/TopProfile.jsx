import React from "react";

const TopProfile = ({ AppUsers, FOLLOW_USER, shortenAddress, icon }) => {
  return (
    <div class="card w-100 shadow-xss rounded-xxl border-0 p-0 mb-3">
      <div class="card-body d-flex align-items-center p-4 mb-0">
        <h4 class="fw-700 mb-0 font-xssss text-grey-900">Top Profile</h4>
        <a
          href="#"
          class="fw-600 ms-auto font-xssss text-primary"
        >
          See all
        </a>
      </div>

      {AppUsers.reverse()
        .map((user, index) => (
          <>
            <div
              class="card-body bg-transparent-card d-flex align-items-center justify-content-around px-1 py-3 bg-lightgrey m-3 rounded-3"
              style={{ marginBottom: "0 !important" }}
            >
              <figure class="avatar me-0 mb-0">
                <img
                  src="images/user.png"
                  alt="image"
                  class="shadow-sm rounded-circle w45"
                />
              </figure>
              <h4 class="fw-700 text-grey-900 font-xssss ">
                {user.name}
                <span class="d-block font-xssss fw-500  lh-3 text-grey-500">
                  {shortenAddress(user.owner)}
                </span>
              </h4>
              <a
                onClick={() => FOLLOW_USER(user.owner)}
                class="btn-round-sm bg-blue text-white cursor-pointer font-xss "
              >
                {icon}
              </a>
            </div>
          </>
        ))
        .slice(5, 10)}
    </div>
  );
};

export default TopProfile;
