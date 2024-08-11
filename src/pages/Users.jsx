import React from "react";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function Users() {
  return (
    <React.Fragment>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </React.Fragment>
  );
}

export default Users;
