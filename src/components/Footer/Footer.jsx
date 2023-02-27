import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Tasty Treat</h2>

        <p>Indulge in a Delightful Dining Experience at Tasty Treat.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right reserved @tastytreat</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://youtube.com/">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
