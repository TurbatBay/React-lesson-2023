import Product from "./Product";
export default function Header(props) {
  return (
    <div className="ui menu">
      <div className="right menu">
        <a className="item active">
          <div class="ui simple dropdown item">
            <i className="heart icon ">{props.wishlist.length}</i>
            <div class="menu">
              <div class="item">
                {props.wishlist.map((w, index) => {
                  return (
                    <div className="item">
                      {w.name}{" "}
                      <button
                        onClick={() => {
                          console.log("remove from wishlist");
                          console.log(w.id);
                          props.setWishlist(
                            props.wishlist.filter((wish) => wish.id !== w.id)
                          );
                        }}
                      >
                        <img
                          className="xMark"
                          src="./images/xmark-solid.svg"
                          alt="zurag"
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </a>
        <a className="item">
          <i className="shopping basket icon"></i>
        </a>
      </div>
    </div>
  );
}
