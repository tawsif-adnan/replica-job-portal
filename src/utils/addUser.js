import { toast } from "react-hot-toast";

const addUser = (data) => {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  //   check the user is already existing
  const existingUser = users?.find((user) => user?.email === data.email);
  if (existingUser) {
    return toast.error("User already exists");
  } else {
    users.push(data);
    toast.success("User registered successfully");
  }

  //   save the updated user to the local storage
  localStorage.setItem("users", JSON.stringify(users));
};

export default addUser;
