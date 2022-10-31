import React from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { FaEllipsisH } from "react-icons/fa";
function Header() {
  return (
    <>
      <header>
        <img src="/images/balloon.jpg" alt="profile-image" id="profile_img" />
        <h3 id="twitter">MarveLous_OD</h3>
        <h3 id="slack">LuCode</h3>
        <span id="forward-icon">
          <RiShareForwardLine size="24px" color="#667085" />
        </span>
        <span id="threedot-icon">
          <FaEllipsisH size="24px" color="#667085" />
        </span>
      </header>
    </>
  );
}

export default Header;
