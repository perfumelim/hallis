import React from "react";
import AppLayout from "components/AppLayout";
import Login from "components/Login";
import LinkIcon from "components/LinkIcon";
import HomeIcon from "components/HomeIcon";
function LoginPage() {
  return (
    <AppLayout>
      <HomeIcon />
      <Login />
      <LinkIcon />
    </AppLayout>
  );
}

export default LoginPage;
