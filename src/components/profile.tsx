"use client";
import { useSession } from "next-auth/react";
const Profile = () => {
  const session = useSession();

  if (session.data?.user) {
    return <div>from client:user is signed in</div>;
  }

  return <div>fom client:user is not signed in</div>;
};

export default Profile;
