import { IBooking, IBookingReview, ICategory, IECategory, IItem, ILogin,  IService,IEProduct, IEOrder, IECoupons } from "./objects";
export interface IReduxStore {
  User: ILogin | null;
  Users: ILogin[] | [];
  Loading: boolean;
  Message:IMessage | null;
   Services:IService[] | [];
   Categories:ICategory[] | [];
   ServiceItem:IItem[] | [];
    Bookings:IBooking[] | [];
    BookingReviews:IBookingReview[] | [];
    EProducts:IEProduct[] | [];
    EOrders:IEOrder[] | [];
    ECategories:IECategory[] | [];
    ECoupons:IECoupons[] | [];

  
}

export interface IMessage {
  type: number;
  message: string;
}
