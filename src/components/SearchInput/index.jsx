import React, { useState, useEffect } from "react";
import "./style.less";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as searchAction from "../../redux/actions/search";
import { useParams } from "react-router-dom";

const SearchInput = (props) => {
  const [keywords, setKeywords] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();

  const reduxKeywords = useSelector((state) => state.search);

  /**
   * 回传的操作
   */
  useEffect(() => {
    if (params.keywords) dispatch(searchAction.updateSearch(params.keywords));
    else dispatch(searchAction.updateSearch(""));
    setKeywords(reduxKeywords.search);
  }, [reduxKeywords.search, params.keywords]);

  function handleKeyUp(e) {
    if (keywords.length > 0) {
      if (e.keyCode === 13) {
        navigate("/search/" + keywords);
        dispatch(searchAction.updateSearch(keywords));
      }
    }
  }

  function handleChange(e) {
    setKeywords(e.target.value);
  }

  return (
    <input
      className="search-input"
      type="text"
      onKeyUp={handleKeyUp}
      value={keywords}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
