import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Registration() {
  const { register, handleSubmit, errors } = useForm();

  const submitHandler = (requestData) => {
    axios
      .post("/", requestData)
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input name="userName" defaultValue="test" ref={register} />
      <input name="password" ref={register({ required: true })} />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
