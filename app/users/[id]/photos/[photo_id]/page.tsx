import React from "react";

interface Props {
  params: {
    id: number;
    photo_id: number;
  };
}

const UserPhotoDetailPage = (props: Props) => {
  return (
    <div>
      UserPhotoDetailPage - UserID: {props.params.id} - PhotoID:{" "}
      {props.params.photo_id}
    </div>
  );
};

export default UserPhotoDetailPage;
