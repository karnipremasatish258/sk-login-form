import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./styles.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  const [page, setPage] = useState("SignUp");
  const [error, setError] = useState(null);
  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      designation: "",
      phoneNumber: "",
      email: "",
      city: "",
      state: "",
      pinecode: "",
      district: "",
      password: "",
    },
  });
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;
  const onSubmitForm = async (data) => {
    console.log(data);
    try {
      await axios.post("http://localhost:2610/register", data);
      setPage("Sign in");
      setError(null);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="main">
      <div className="card">
        <div className="avatar">
          <Avatar src="/broken-image.jpg" />
        </div>
        {page === "SignUp" ? (
          <h1 className="registerHeading">Sign Up</h1>
        ) : (
          <h1 className="registerHeading">Sign in</h1>
        )}
        {page === "SignUp" ? (
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="texts">
              <TextField
                {...register("name", {
                  required: {
                    value: true,
                    message: "name required",
                  },
                })}
                className="outlined-basic"
                id="name"
                label="name"
                variant="outlined"
              />
              <p>{errors.name?.message}</p>
            </div>
            <div className="texts">
              <TextField
                {...register("username", {
                  required: {
                    value: true,
                    message: "username required",
                  },
                })}
                className="outlined-basic"
                id="username"
                label="username"
                variant="outlined"
              />
              <p>{errors.username?.message}</p>
            </div>
            <div className="texts">
              <TextField
                {...register("designation", {
                  required: {
                    value: true,
                    message: "designation required",
                  },
                })}
                className="outlined-basic"
                id="designation"
                label="designation"
                variant="outlined"
              />
              <p>{errors.designation?.message}</p>
            </div>

            <div className="texts">
              <TextField
                {...register("email", {
                  required: {
                    value: true,
                    message: "email required",
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
                    message: "Invalid email",
                  },
                })}
                className="outlined-basic"
                id="email"
                label="email"
                variant="outlined"
                type="email"
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className="texts">
              <TextField
                {...register("phoneNumber", {
                  valueAsNumber: true,
                  validate: {
                    pinecodeCheck: (fieldValue) => {
                      return !isNaN(fieldValue) || "number";
                    },
                  },
                  required: {
                    value: true,
                    message: "phoneNumber required",
                  },
                })}
                className="outlined-basic"
                id="phoneNumber"
                label="phoneNumber"
                variant="outlined"
              />
              <p>{errors.phoneNumber?.message}</p>
            </div>
            <div className="texts">
              <TextField
                {...register("city", {
                  required: {
                    value: true,
                    message: "city required",
                  },
                })}
                className="outlined-basic"
                id="city"
                label="city"
                variant="outlined"
              />
              <p>{errors.city?.message}</p>
            </div>
            <div className="texts">
              <TextField
                {...register("state", {
                  required: {
                    value: true,
                    message: "state required",
                  },
                })}
                className="outlined-basic"
                id="state"
                label="state"
                variant="outlined"
              />
              <p>{errors.state?.message}</p>
            </div>
            <div className="texts">
              <TextField
                {...register("pinecode", {
                  valueAsNumber: true,
                  validate: {
                    pinecodeCheck: (fieldValue) => {
                      return !isNaN(fieldValue) || "number";
                    },
                  },
                  required: {
                    value: true,
                    message: "pinecode required",
                  },
                })}
                className="outlined-basic"
                id="pinecode"
                label="pinecode"
                variant="outlined"
              />
              <p>{errors.pinecode?.message}</p>
            </div>
            <div className="texts">
              <TextField
                {...register("district", {
                  required: {
                    value: true,
                    message: "district required",
                  },
                })}
                className="outlined-basic"
                id="district"
                label="district"
                variant="outlined"
              />

              <p>{errors.district?.message}</p>
            </div>
            <div className="texts">
              <TextField
                {...register("password", {
                  required: {
                    value: true,
                    message: "password required",
                  },
                })}
                className="outlined-basic"
                id="password"
                label="Password"
                variant="outlined"
                type="password"
              />
              <p>{errors.password?.message}</p>
            </div>
            <div className="buttons">
              {error && <p>{error}</p>}
              <Button onLoad={false} type="submit" variant="contained">
                Sign Up
              </Button>
              <h1 className="signedup">
                Already Signed Up? &nbsp;
                <Link onClick={() => setPage("Sign in")} href="#">
                  Click here
                </Link>
              </h1>
            </div>
          </form>
        ) : (
          <div className="card">
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <div className="texts">
                <TextField
                  {...register("username", {
                    required: {
                      value: true,
                      message: "username required",
                    },
                  })}
                  className="outlined-basic"
                  id="username"
                  label="username"
                  variant="outlined"
                />
                <p>{errors.username?.message}</p>
              </div>
              <div className="texts">
                <TextField
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password required",
                    },
                  })}
                  className="outlined-basic"
                  id="password"
                  label="password"
                  variant="outlined"
                  type="password"
                />
                <p>{errors.password?.message}</p>
              </div>
              <div className="buttons">
                <Button type="submit" variant="contained">
                  Sign in
                </Button>
                <h1 className="signedup">
                  New User? &nbsp;
                  <Link onClick={() => setPage("SignUp")} href="#">
                    Click here
                  </Link>
                </h1>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
