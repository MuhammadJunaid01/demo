import { isSearch } from "@/redux/slices/search.slice";
import { RootStore } from "@/redux/store";
import Image from "next/image";
import { FaRegTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/search-box.module.css";
const SearchBox = () => {
  const { isShow } = useSelector((state: RootStore) => state.search);
  const { searchRes } = useSelector((state: RootStore) => state.product);
  const dispatch = useDispatch();
  return (
    <div
      className={
        isShow ? [style.container, style.open].join(" ") : style.container
      }
    >
      <div>
        <p style={{ textAlign: "end" }}>
          <FaRegTimesCircle
            onClick={() => dispatch(isSearch())}
            style={{
              color: "var(--color-secoundary)",
              fontSize: "25px",
              cursor: "pointer",
            }}
          />
        </p>
        <div>
          <h5 style={{ textAlign: "center", margin: "3px 0px" }}>
            Search Result
          </h5>
          {searchRes.map((data, index) => {
            return (
              <div className={style.content} key={index}>
                <Image
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                  width={50}
                  height={50}
                  src={data.image}
                  alt="search image"
                />
                <p style={{ margin: "0px" }}>{data.price}</p>
                <p style={{ margin: "0px" }}>{data.rating.rate}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
