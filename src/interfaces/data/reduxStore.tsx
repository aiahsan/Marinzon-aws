import { IBooking, IBookingReview, ICategory, IECategory, IItem, ILogin,  IService,IEProduct } from "./objects";
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
  
}

export interface IMessage {
  type: number;
  message: string;
}
