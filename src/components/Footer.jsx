import React from "react";
import {
  Facebook,
  Twitter,
  YouTube,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="page__footer">
        <div className="social">
          <ul>
            <li className="fb list-inline-item">
              <a
                className="social-share-link"
                href="#"
                itemProp="sameAs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li className="tw list-inline-item">
              <a
                className="social-share-link"
                href="#"
                itemProp="sameAs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square" aria-hidden="true">
                  <Twitter />
                </i>
              </a>
            </li>
            <li className="yt list-inline-item">
              <a
                className="social-share-link"
                href="#"
                itemProp="sameAs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube-square" aria-hidden="true">
                  <YouTube />
                </i>
              </a>
            </li>
            <li className="ig list-inline-item">
              <a
                className="social-share-link"
                href="#"
                itemProp="sameAs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram" aria-hidden="true">
                  <Instagram />
                </i>
              </a>
            </li>
            <li className="linkedin-in list-inline-item">
              <a
                className="social-share-link"
                href="#"
                itemProp="sameAs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true">
                  <LinkedIn />
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          Copyright © 2004-2023 Duke University Health System
        </div>
      </footer>
    </div>
  );
};

export default Footer;
