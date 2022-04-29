import { IBooking, IBookingReview, ICategory, IItem, ILogin,  IService } from "./objects";
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
    CurrentBooking:IBooking | null;
 }

export interface IMessage {
  type: number;
  message: string;
}
