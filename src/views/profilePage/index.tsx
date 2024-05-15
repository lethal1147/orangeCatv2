import { useParams } from "react-router-dom";
import { Datasource } from "@/components";
import Profile from "./components/profile";
import { getOneUserById } from "@/api";

export default function ProfilePage() {
  const { userId } = useParams();

  return (
    <Datasource
      resouceName="user"
      fn={userId ? () => getOneUserById(userId) : undefined}
      render={(source) => <Profile user={source} />}
    />
  );
}
