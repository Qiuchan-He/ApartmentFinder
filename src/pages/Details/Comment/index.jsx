import React, { useState, useEffect } from "react";
import CommentView from "../CommentView";
import api from "../../../api";

const Comment = (props) => {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    api
      .comment({ id: props.id })
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.result.data);
          setComment(res.data.result.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {comment.length > 0 ? <CommentView data={comment} /> : <div>Loading</div>}
    </div>
  );
};

export default Comment;
