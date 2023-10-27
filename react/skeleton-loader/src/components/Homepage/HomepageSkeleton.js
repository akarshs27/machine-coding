import Skeleton from "../common/Skeleton";
import "./style.css";

const HomepageSkeleton = ({ count }) => {
  const skeletonsList = new Array(count).fill(0);
  return (
    <div className="cart-wrapper">
      {skeletonsList.map((each) => (
        <div className="each-cart-wrapper-skeleton">
          <Skeleton
            variant="rectangular"
            height={120}
            width={240}
            margin="0 0 16px 0"
          />
          <Skeleton
            variant="rounded"
            height={20}
            width={200}
            margin="0 0 8px 0"
          />
          <Skeleton
            variant="rounded"
            height={20}
            width={160}
            margin="0 0 8px 0"
          />
          <Skeleton
            variant="rounded"
            height={20}
            width={160}
            margin="0 0 8px 0"
          />
        </div>
      ))}
    </div>
  );
};

export default HomepageSkeleton;
