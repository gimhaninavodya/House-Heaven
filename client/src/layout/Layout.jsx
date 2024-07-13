import React, { useContext, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../context/UserDetailsContext.js";
import { useMutation } from "react-query";
import { createUser } from "../utils/api.js";
import useFavourites from "../hooks/useFavourites.jsx";
import useBookings from "../hooks/useBookings.jsx";

const Layout = () => {

  useFavourites()
  useBookings()

  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const getTokenAndRegister = async () => {

      try {
        console.log("Requesting access token with popup...");
        const res = await getAccessTokenWithPopup({
          authorizationParams: {
            audience: "https://dev-zyncb7xb3qggtfei.us.auth0.com/api/v2/",
            scope: "openid profile email"
          },
        });
        console.log("Access token received:");
        localStorage.setItem("access_token", res);
        setUserDetails((prev) => ({ ...prev, token: res }));
        mutate(res);
      } catch (error) {
        console.error("Error fetching the access token:", error);
        alert("Error fetching the access token: " + error.message);
      }
    };


    if (isAuthenticated) {
      getTokenAndRegister();
    }
  }, [isAuthenticated]);

  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;