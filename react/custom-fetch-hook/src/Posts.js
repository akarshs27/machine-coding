import { useFetch } from "./useFetch";

const Posts = () => {
  const { data, isLoading, isError, errorMsg } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Posts;
