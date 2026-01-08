import React from "react";
import { button } from "./icons";
import style from "./style/footer.module.css";

const SocialMedia = () => {
  return (
    <div>
      {button.map((item) => (
        <React.Fragment key={item.id}>
          <a href={item.url ? item.url : `mailto:${item.email}`}>
            <img
              src={item.src}
              alt={item.alt}
              width={23}
              height={23}
              className={style.imageSocial}
            />
          </a>
  
        </React.Fragment>
      ))}
    </div>
  );
};

export default SocialMedia;