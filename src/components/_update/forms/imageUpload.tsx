import React from "react";
//@ts-ignore
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import { AnySchema } from "yup";
import { IService } from "../../../interfaces/data/objects";
import { ImageUrl } from "../../../utiles/baseUrl";
export default ({
  getImageFileObject,
  runAfterImageDelete,
  image,
  _Image
}: {
  getImageFileObject: (img: any) => void;
  runAfterImageDelete: (img: any) => void;
  image: string | undefined;
  _Image:AnySchema
}) => {
     console.log(image)
   return (<>
     <ImageUploader
      onFileAdded={(img: any) => {
        getImageFileObject(img);
      }}
      onFileRemoved={(img: any) => runAfterImageDelete(img)}
      style={{
        height: 200,
        width: 200,
        backgroundImage: `url('${(ImageUrl+image)}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      deleteIcon={
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
          alt=""
        />
      }
      uploadIcon={
        <svg
          className="svg-circleplus"
          viewBox="0 0 100 100"
          style={{ height: "40px", stroke: "#000" }}
        >
          <circle cx="50" cy="50" r="45" fill="none" strokeWidth="7.5"></circle>
          <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="5"></line>
          <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="5"></line>
        </svg>
      }
    />
     </>
  );
};
