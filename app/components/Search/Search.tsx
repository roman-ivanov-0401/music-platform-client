import { ChangeEvent, FC, useEffect, useState } from "react";

import { SkeletonLoader } from "@/ui/SkeletonLoader";

import { useDebounce } from "@/hooks/useDebounce";

import { SearchDropdownPoint } from "../SearchDropdownPoint";

import styles from "./search.module.scss";
import { SearchProps } from "./search.types";
import { useSearchByTermMutation } from "@/services/search.service";

export const Search: FC<SearchProps> = ({ placeholder }) => {
  const [sendSearchRequest, { data, isLoading, error }] =
    useSearchByTermMutation();

  const [isTyping, setIsTyping] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchResult = useDebounce(data, 500);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      setShowDropdown(false);
    } else {
      if (!isTyping) setIsTyping(true);
      if (!showDropdown) setShowDropdown(true);
      sendSearchRequest(e.target.value);
    }
  };

  const blurHandler = () => {
    //setShowDropdown(false);
  };

  useEffect(() => {
    setIsTyping(false);
    console.log(searchResult);
  }, [searchResult]);
  return (
    <div className={styles.search} onBlur={blurHandler}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.searchInput}
        onChange={inputHandler}
      />
      {showDropdown && (isTyping || searchResult) && (
        <ul className={styles.dropdown}>
          {isTyping && (
            <>
              <SearchDropdownPoint className={styles.dropdownPoint} loading>
                <SkeletonLoader margin="10px 0" height=".75rem" />
              </SearchDropdownPoint>
              <SearchDropdownPoint className={styles.dropdownPoint} loading>
                <SkeletonLoader margin="10px 0" height=".75rem" />
              </SearchDropdownPoint>
              <SearchDropdownPoint className={styles.dropdownPoint} loading>
                <SkeletonLoader margin="10px 0" height=".75rem" />
              </SearchDropdownPoint>
              <SearchDropdownPoint className={styles.dropdownPoint} loading>
                <SkeletonLoader margin="10px 0" height=".75rem" />
              </SearchDropdownPoint>
            </>
          )}
          {searchResult && !isTyping && (
            <>
              {searchResult.albums.map(({ _id, name, cover }) => (
                <SearchDropdownPoint
                  className={styles.dropdownPoint}
                  key={_id}
                  data={{
                    image: cover,
                    type: "Album",
                  }}
                >
                  {name}
                </SearchDropdownPoint>
              ))}
              {searchResult.eps.map(({ _id, name, cover }) => (
                <SearchDropdownPoint
                  className={styles.dropdownPoint}
                  key={_id}
                  data={{
                    image: cover,
                    type: "EP",
                  }}
                >
                  {name}
                </SearchDropdownPoint>
              ))}
              {searchResult.singles.map(({ _id, name, cover }) => (
                <SearchDropdownPoint
                  className={styles.dropdownPoint}
                  key={_id}
                  data={{
                    image: cover,
                    type: "Single",
                  }}
                >
                  {name}
                </SearchDropdownPoint>
              ))}
               {searchResult.artists.map(({ _id, name, image }) => (
                <SearchDropdownPoint
                  className={styles.dropdownPoint}
                  key={_id}
                  data={{
                    image,
                    type: "Artist",
                  }}
                >
                  {name}
                </SearchDropdownPoint>
              ))}
              {searchResult.playlists.map(({ _id, name, image }) => (
                <SearchDropdownPoint
                  className={styles.dropdownPoint}
                  key={_id}
                  data={{
                    image: image,
                    type: "Playlist",
                  }}
                >
                  {name}
                </SearchDropdownPoint>
              ))}
            </>
          )}
        </ul>
      )}
    </div>
  );
};
