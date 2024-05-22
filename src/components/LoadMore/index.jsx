import React, { useState, useEffect, useRef } from "react";
import "./style.less";

const LoadMore = (props) => {
  const [loadTop, setLoadTop] = useState(10000);
  const more = useRef();

  useEffect(() => {
    let timer = null;
    //视口高度
    let winHeight = document.documentElement.clientHeight;

    function scrollHandle() {
      if (more.current) {
        setLoadTop(more.current.getBoundingClientRect().top);
        if (timer) {
          clearTimeout(timer);
        } else {
          timer = setTimeout(() => {
            if (winHeight > loadTop) {
              props.onLoadMore();
            }
          }, 300);
        }
      }
    }
    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, [loadTop]);

  return (
    <div ref={more} className="load">
      Load More
    </div>
  );
};

export default LoadMore;
