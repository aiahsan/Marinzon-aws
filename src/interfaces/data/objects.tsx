export interface ILogin {
  userName: string;
  password: string;
  token?: string;
  fullName?: string;
  role?: [];
  id?: number | undefined;
  image?:string
  mobileNumberEmail?:string
  recordUserId?:number | string |undefined,
  isAdmin?:boolean
}

export interface ICategory extends IBase {
  id?: number;
  serviceId: number;
  title: string;
  description: string;
  service?: IService;
  isApproved?:boolean;
}
export interface IService extends IBase {
  id?: number | undefined;
  title: string;
  description: string;
  image: string;
} 

export interface IItem extends IBase {
  id: number | undefined;
  serviceId: number | undefined;
  categoryId: number | undefined;
  title: string;
  image?:string;
  description: string;
  fAQServices?: IFAQService[];
  fAQQuestions?: IFAQQuestion[];
  serviceItemServices?: IServiceItemService[];
  serviceStatus?:string;
  bookingBy?:number | string ;
  user?:ILogin;
  service?: IService;
  category?:ICategory;
  isApproved?:boolean;
}
export interface IFAQService extends IBase {
  id?: number | undefined |string;
  serviceItemId?: number | undefined;
  serviceTitle: string;
}
export interface IFAQQuestion extends IBase {
  id?: number | undefined;
  serviceItemId?: number | undefined;
  serviceFAQQuestion: string;
  serviceFAQAnswer: string;
}
export interface IServiceItemService extends IBase {
  id?: number | undefined | string;
  serviceItemId?: number | undefined;
  serviceItemServiceTitle: string;
  serviceItemServicePrices?:IServiceItemServicePrice[]
  isCompleted?:boolean
   
}
export interface IServiceItemServicePrice extends IBase {
  id?: number | undefined;
  serviceItemServiceId?: number | undefined;
  ServiceItemServiceTitle: string;
  ServiceItemServiceValue: number;
}
export interface IBooking extends IBase {
  id?: number | undefined;
  serviceItemId?: number | string|undefined;
  bookerId?: number | string|undefined;
  bookingDateTime ?: Date;
  bookingStatus?: string|undefined;
  serviceItem?: IItem
  user?:ILogin;
  bookingAddress?:string;
  bookingInstructions?:string;
  bookingTime?:string;
  assignBooking?:ILogin;
  assignBookingId?:number;
  bookingItems?:any
}

export interface IBookingReview extends IBase {
    id?: number | undefined;
    bookingId?: number | string|undefined;
    reviewById?: number | string|undefined;
    rattings?: number | string|undefined;
    reviews?: string|undefined;
    isVerifed?: boolean;
    user?:ILogin;
    bookings?:IBooking;
}
   

export interface IBase {
  isActive?: Boolean;
  createAt?: string;
  modiefiedAt?: string;
  createdBy?: number;
  modiefiedBy?: number;
  recordUserId?: number;
  uploadImage?: string;
}

export interface IReturnData {
  data: any;
  success: string;
  message: string;
}

export interface ItechStacks {
  label: string;
  value: string;
}


export interface IECategory extends IBase {
  id?: number;
  title: string;
  description: string;
   isApproved?:boolean;
}

export interface IEProduct extends IBase {
  id?: number;
  eCategoryId: number;
  title: string;
  description: string;
  rDescription: string;
  price: number;
  discountPer: number;
  image: string;
   isApproved?:boolean;
}

export interface IEOrder extends IBase {
  id?: number;
  purchasePrice: number;
  discountPer: number;
  deliveryAddress: string;
  deliveryInstructions : string;
  bookingStatus : string;
  orderBy : number;
  user : any;
  isApproved?:boolean;
  ordersItems?:IEOrderItems[]|[]
}

export interface IEOrderItems extends IBase {
  id?: number;
  purchasePrice: number;
  discountPer: number;
  orignalPrice: number;
  eOrderId: number;
  eProductId:number;
  eProduct:IEProduct  
}