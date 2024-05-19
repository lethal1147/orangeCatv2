import { UserDataTypePopulate } from "./userType";

export type FriendRequestTypePopulate = {
  _id: string;
  requestSender: UserDataTypePopulate;
  requestReceiver: UserDataTypePopulate;
  requestDate: string | Date;
  createdAt: string | Date;
  updatedAt: string | Date;
};
