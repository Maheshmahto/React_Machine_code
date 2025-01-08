import React, { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";

const Outside = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div
          ref={ref}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close it. It won't close if you
            click inside.
          </p>
          
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default Outside;
