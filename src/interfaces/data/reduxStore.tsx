import { IBooking, IBookingReview, ICategory, IECategory, IItem, ILogin,  IService,IEProduct, IEOrder } from "./objects";
export interface IReduxStore {
  User: ILogin | null;
  Users: ILogin[] | [];
  Loading: boolean;
  Message:IMessage | null;
   Services:IService[] | [];
   Categories:ICategory[] | [];
   ECategories:IECategory[] | [];
   ServiceItem:IItem[] | [];
    Bookings:IBooking[] | [];
    BookingReviews:IBookingReview[] | [];
    EProducts:IEProduct[] | [];
    EOrders:IEOrder[] | [];
  
}

export interface IMessage {
  type: number;
  message: string;
}
