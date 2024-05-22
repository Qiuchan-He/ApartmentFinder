import React, { useState, useEffect } from "react";
import SearchListView from "../SearchListView";
import api from "../../../api";
import LoadMore from "../../../components/LoadMore";

const SearchList = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    http();

    return () => {
      setSearchData([]);
      setHasMore(false);
    };
  }, [props.search]);

  function loadMoreHandle() {
    http();
  }

  function http() {
    api
      .search({
        search: props.search,
      })
      .then((res) => {
        if (res.data.status === 200) {
          setSearchData(searchData.concat(res.data.result.data));
          setHasMore(res.data.result.hasMore);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {searchData.length > 0 ? (
        <SearchListView search={searchData} />
      ) : (
        <div> Loading data</div>
      )}
      {hasMore ? (
        <LoadMore onLoadMore={loadMoreHandle} />
      ) : (
        <div>No more data</div>
      )}
    </div>
  );
};

export default SearchList;
