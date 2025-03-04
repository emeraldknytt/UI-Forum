import React, { useState } from "react";
import { CiUser, CiLock  } from "react-icons/ci";
import { AiOutlineLoading } from "react-icons/ai";

import { Input } from "./index";
import { shortenAddress } from "../../../utils/utils";

const register = ({
  CREATE_ACCOUNT,
  userAddress,
  connected,
  connectWallet,
}) => {
  const [formInput, updateFormInput] = useState({
    name: "",
  });




  return (
    <div class="color-theme-blue">
      <div class="main-wrap">
        <div class="row">
          <div
            class="col-xl-5 d-none d-xl-block p-0 vh-100 bg-image-cover bg-no-repeat"
            style={{ backgroundImage: "url(images/login-bg.jpg)" }}
          ></div>
          <div class="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
            <div class="card shadow-none border-0 ms-auto me-auto login-card">
              <div class="card-body rounded-0 text-left">
                <h2 class="fw-700 display1-size display2-md-size text-blue mb-4">
                  Welcome to UI-Forum
                </h2>
                <h3 class="fw-400 mb-3">Sign in with your Metamask</h3>
                <div class="lh-1">
                  <Input
                    Icon={<CiUser />}
                    placeholder={"Enter your username"}
                    handleClick={(e) =>
                      updateFormInput({ ...formInput, name: e.target.value })
                    }
                  />
                  <Input
                    Icon={<CiLock />}
                    placeholder={shortenAddress(userAddress)}
                  />
                </div>

                <div class="col-sm-12 p-0 cursor-pointer text-left">
                  <div class="form-group mb-1">
                    {connected === "CREATE_ACCOUNT" ? (
                      <a
                      onClick={() => CREATE_ACCOUNT(formInput)}
                      class="form-control text-center style2-input bg-blue text-white fw-600 border-0 p-0"
                    >
                      Register
                    </a>
                    ) : (
                      <a
                        onClick={() => connectWallet()}
                        class="form-control text-center style2-input text-white bg-blue fw-600 border-0 p-0"

                      >
                        Connect Wallet
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
