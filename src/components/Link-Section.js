import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { Link } from "react-router-dom";

function LinkSection() {
  return (
    <>
      <section className="linksection">
        <a href="https://twitter.com/MarvLous_OD" id="btn_zuri">
          Twitter Link
        </a>
        <a href="https://training.zuri.team/" id="btn_zuri">
          zuri team
        </a>
        <a href="https://books.zuri.team/" id="books">
          zuri books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=<LuCode>"
          id="book_python"
        >
          python books
        </a>
        <a href="https://background.zuri.team/" id="pitch">
          background check for coders
        </a>
        <a href="https://books.zuri.team/design-rules" id="book_design">
          design books
        </a>
        <Link to="contact">
          <a id="Contact">Contact</a>
        </Link>
        <div className="social-links">
          <div className="links">
            <a href="https://app.slack.com/client/T042F7V19Q8/C041V6WKAUS/rimeto_profile/U047Z4GGHDM">
              <FaSlack size="24px" />
            </a>
            <a href="https:/github.com/Marvelousmicheal">
              <FaGithub size="24px" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default LinkSection;
