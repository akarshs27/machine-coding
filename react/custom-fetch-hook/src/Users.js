import { useFetch } from "./useFetch";

const Users = () => {
  const { data, isLoading, isError, errorMsg } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Users;
