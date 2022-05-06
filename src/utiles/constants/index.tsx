import React from "react";
import { IFAQQuestion, IFAQService, IServiceItemService } from "../../interfaces/data/objects";
 
export const LoginType = {
  Email:1,
  PhoneNumber:2
}
export const UserRoles=
{
    Admin :1,
    Support :2,
    User: 3,
    Vendor:4
}
export const ItemStatus={
  pending: "Pending",
  approved:"Approved",
  rejected: "Rejected",
}
export const bookingStatus={
  pending: "Pending",
  completed:"Completed",
  rejected: "Rejected",
}

export const _csttags:IServiceItemService[]= [
  {
    id: Date.now().toString(),
    serviceItemServiceTitle: "",
    serviceItemServicePrices: [],
    isCompleted: false,
  },
];
export const  _cstServicesInclude :IFAQService[]= ([
  
]);

export const _cstFaqQuestion:IFAQQuestion[]=([{
  id:1,
  serviceFAQQuestion:"What materials will the pro bring if the cleaning service is booked with materials?",
  serviceFAQAnswer:"",
},
{
  id:2,
  serviceFAQQuestion:"How long does the service take?",
  serviceFAQAnswer:"",
},
{
  id:3,
  serviceFAQQuestion:"What should I do if I want to increase the scope of my service ?",
  serviceFAQAnswer:"",
}
,
{
  id:4,
  serviceFAQQuestion:"I have children and/or pets, is it safe?",
  serviceFAQAnswer:"",
},
{
  id:5,
  serviceFAQQuestion:"Are the service providers’ Dubai Municipality approved? What chemical do you use?",
  serviceFAQAnswer:"",
},
{
  id:6,
  serviceFAQQuestion:"Any important information that the provider needs to know?",
  serviceFAQAnswer:"",
}

])

 
export function changeKeysToUpper(obj:any) {
  var key, upKey;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) {
          upKey = key.charAt(0).toUpperCase() + key.slice(1);;
          if(upKey!="Id")
          {
            if (upKey !== key) {
              obj[upKey] = obj[key];
              delete(obj[key]);
              }
          }
        // recurse
        if (typeof obj[upKey] === "object") {
            changeKeysToUpper(obj[upKey]);
        }
      }
  }
  return obj;
}