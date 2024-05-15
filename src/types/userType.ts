import { GenderEnumType } from "@/constants";

export interface RegisterBody {
  userJson: string;
  image: File;
}

export interface UserDataType {
  _id: string;
  createdAt: Date | string;
  email: string;
  firstName: string;
  follower: string[];
  following: string[];
  gender: GenderEnumType;
  lastName: string;
  password?: string;
  updatedAt: Date | string;
  username: string;
}

export interface UserProfileImageType {
  createdAt: Date | string;
  image: string;
  imageType: string;
  updatedAt: string;
  _id: string;
}

export interface UserProfileStyleType {
  _id: string;
  coverImageId: {
    _id: string;
    image: string;
    imageType: string;
  };
}

export interface UserDataTypePopulate extends UserDataType {
  profileImageId: UserProfileImageType;
  profileStyleId: UserProfileStyleType;
}
