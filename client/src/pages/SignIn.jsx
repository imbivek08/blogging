import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getApiUrl } from "../utils/api";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/features/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      return dispatch(signInFailure("Fill out all the field"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch(getApiUrl("/api/auth/signin"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div>
      <div className="min-h-screen mt-20 ">
        <div className="flex mx-auto max-w-3xl flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1">
            <Link to={"/"} className="text-4xl">
              <span className="px-3 py-1 bg-gradient-to-r text-white from-red-500 via-purple-700 to-pink-700 rounded-lg w-[200px]">
                Bivek
              </span>
              Blog
            </Link>
            <p className="pt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              culpa ex eius.
            </p>
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="Your username" />
                <TextInput
                  type="text"
                  placeholder="username"
                  id="username"
                  onChange={handleChange}
                />
              </div>

              <div>
                <Label value="Your password" />
                <TextInput
                  type="password"
                  placeholder="password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button
                gradientDuoTone="purpleToPink"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span>Loading...</span>
                  </>
                ) : (
                  "Signin"
                )}
              </Button>
            </form>
            <div className="pt-4 flex gap-2">
              <span>Create an Account?</span>
              <Link to={"/signup"} className="text-blue-500">
                Signup
              </Link>
            </div>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
