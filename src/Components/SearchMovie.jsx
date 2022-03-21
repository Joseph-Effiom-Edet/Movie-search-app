import React from "react";

function SearchMovie(props) {
  return (
    <div>
      <h4 className="font-DM Sans font-normal text-2xl text-[#000000] not-italic my-1 static ml-[77px] mt-[31px]">
        Search
      </h4>
      <input
        className="lg:w-[81.62rem] md:w-[42.5rem] sm:w-[16.5625] h-[3.375rem] ml-[77px] border-2 border-solid border-black"
        placeholder="Type to search"
        onChange={props.onSearch}
        value={props.value}
      ></input>
    </div>
  );
}

export default SearchMovie;
