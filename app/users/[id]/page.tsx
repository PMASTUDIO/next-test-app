import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: number;
  };
}

const UserDetailPage = (props: Props) => {
  if (props.params.id > 10) notFound();

  return <div>UserDetailPage {props.params.id}</div>;
};

export default UserDetailPage;
