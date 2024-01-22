"use client";

import React, { useState } from "react";
import {
  CldImage,
  CldUploadWidget,
  CldUploadWidgetPropsOptions,
} from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  const cloudinary_options: CldUploadWidgetPropsOptions = {
    sources: ["local"],
    multiple: false,
  };

  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={270} alt={""} />
      )}
      <CldUploadWidget
        uploadPreset="g9xsrxwy"
        options={cloudinary_options}
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
