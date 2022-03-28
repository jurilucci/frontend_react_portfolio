import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div className="app__social-linkedin">
      <a href="https://www.linkedin.com/in/juri-lucci/" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
      </a>
    </div>
    <div className="app__social-facebook">
      <a href="https://www.facebook.com/yuri.lucci/" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
    </div>
    <div className="app__social-instagram">
      <a href="https://www.instagram.com/yuri_1302/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
