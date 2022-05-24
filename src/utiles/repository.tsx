import { IBooking, IBookingReview, ICategory, IECategory, IEOrder, IEProduct, IItem, ILogin, IService } from "../interfaces/data/objects";
import { api } from "./baseUrl";
const login = async (data: ILogin) => {
  return await api.post("/user/login", data);
};
const register = async (data: ILogin) => {
  return await api.post("/user/register", data);
};

const GetServices = async (token: string) => {
  return await api.get("/Service", undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const PostServices = async (token: string,data:IService) => {
  return await api.post("/Service",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateServices = async (token: string,data:IService) => {
  return await api.put("/Service",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteServices = async (token: string,data:IService) => {
  return await api.delete("/Service",{Id:data?.id,recordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const GetCategory = async (token: string) => {
  return await api.get("/Category",undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const PostCategory = async (token: string,data:ICategory) => {
  return await api.post("/Category",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateCategory = async (token: string,data:ICategory) => {
  return await api.put("/Category",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteCategory = async (token: string,data:ICategory) => {
  return await api.delete("/Category",{Id:data?.id,RecordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const GetECategory = async (token: string) => {
  return await api.get("/ECategory",undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const PostECategory = async (token: string,data:IECategory) => {
  return await api.post("/ECategory",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateECategory = async (token: string,data:IECategory) => {
  return await api.put("/ECategory",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteECategory = async (token: string,data:IECategory) => {
  return await api.delete("/ECategory",{Id:data?.id,RecordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const GetServiceItem = async (token: string,userId?:string) => {
   return await api.get("/ServiceItem"+(userId!=undefined?`?userId=${userId}`:""),undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const PostServiceItem = async (token: string,data:IItem) => {
  return await api.post("/ServiceItem",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateServiceItem = async (token: string,data:IItem) => {
  return await api.put("/ServiceItem",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateServiceItemStatus = async (token: string,data:number) => {
  return await api.put("/ServiceItem/approveStatus?id="+data,{},{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteServiceItem = async (token: string,data:IItem) => {
  return await api.delete("/ServiceItem",{Id:data?.id,RecordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const GetBookings = async (token: string,userId?:string) => {
  return await api.get("/Booking"+(userId!=undefined?`?userId=${userId}`:""),undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const PostBookings = async (token: string,data:IBooking) => {
  return await api.post("/Booking",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateBookings = async (token: string,data:IBooking) => {
  return await api.put("/Booking",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const AssignBookings = async (token: string,data:any) => {
  return await api.put(`/Booking/assign?bookingId=${data?.bookingId}&assignId=${data?.assignId}&userId=${data?.userId}`,undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateBookingStatus = async (token: string,data:IBooking) => {
  return await api.put("/Booking/bookingstatus",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteBookings = async (token: string,data:IBooking) => {
  return await api.delete("/Booking",{Id:data?.id,recordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
}
const GetBookingReviews = async (token: string,userId?:string) => {
  return await api.get("/BookingReview"+(userId!=undefined?`?userId=${userId}`:""),undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const PostBookingReviews = async (token: string,data:IBookingReview) => {
  return await api.post("/BookingReview",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateBookingReviews = async (token: string,data:IBookingReview) => {
  return await api.put("/BookingReview",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateBookingReviewstatus = async (token: string,data:IBookingReview) => {
  return await api.put("/BookingReview/BookingReviewstatus",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteBookingReviews = async (token: string,data:IBookingReview) => {
  return await api.delete("/BookingReview",{Id:data?.id,recordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
}
const updateUser = async (token: string,data:ILogin) => {
  return await api.put("/user",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
}

const GetUsers = async (token: string) => {
  return await api.get("/user",undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const DeleteUser = async (token: string,data:ILogin) => {
  return await api.delete("/user",{Id:data?.id,RecordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const GetEProduct = async (token: string) => {
  return await api.get("/EProduct",undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const PostEProduct = async (token: string,data:IEProduct) => {
  return await api.post("/EProduct",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const UpdateEProduct = async (token: string,data:IEProduct) => {
  return await api.put("/EProduct",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteEProduct = async (token: string,data:IEProduct) => {
  return await api.delete("/EProduct",{Id:data?.id,RecordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const GetEOrder = async (token: string) => {
  return await api.get("/EOrder",undefined,{
    headers: { Authorization: `Bearer ${token}` },
  });
};


const PostEOrder = async (token: string,data:IEOrder) => {
  return await api.post("/EOrder",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const UpdateEOrder = async (token: string,data:IEOrder) => {
  return await api.put("/EOrder",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};

const UpdateEOrderStatus = async (token: string,data:IEOrder) => {
  return await api.put("/EOrder/bookingstatus",data,{
    headers: { Authorization: `Bearer ${token}` },
  });
};
const DeleteEOrder = async (token: string,data:IEOrder) => {
  return await api.delete("/EOrder",{Id:data?.id,recordUserId:data.recordUserId},{
    headers: { Authorization: `Bearer ${token}` },
  });
}
export const repository = {
  login,
  register,
  GetServices,
  PostServices,
  UpdateServices,
  DeleteServices,
  GetCategory,
  PostCategory,
  DeleteCategory,
  UpdateCategory,
  GetECategory,
  PostECategory,
  DeleteECategory,
  UpdateECategory,
  GetServiceItem,
  PostServiceItem,
  UpdateServiceItem,
  DeleteServiceItem,
  GetBookings,
  PostBookings,
  UpdateBookings,
  DeleteBookings,
  GetBookingReviews,
  PostBookingReviews,
  UpdateBookingReviews,
  DeleteBookingReviews,
  UpdateBookingStatus,
  UpdateBookingReviewstatus,
  updateUser,
  GetUsers,
  DeleteUser,
  UpdateServiceItemStatus,
  AssignBookings,
  GetEProduct,
  PostEProduct,
  UpdateEProduct,
  DeleteEProduct,
  GetEOrder,
  PostEOrder,
  UpdateEOrder,
  UpdateEOrderStatus,
  DeleteEOrder
};
