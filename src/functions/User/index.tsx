import { AnyAction, Dispatch } from "redux";
import { IService, IReturnData, ILogin } from "../../interfaces/data/objects";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { loadingAction } from "../../redux/actionMethodes/loader";
import { messageAction } from "../../redux/actionMethodes/message";
import { addServicesAM, deleteServiceAM, setServicesAM, updateServiceAM } from "../../redux/actionMethodes/Services";
import { deleteUserAM, LoginAction, setUserAM } from "../../redux/actionMethodes/user/idnex";
import { repository } from "../../utiles/repository";
import jwt_decode from "jwt-decode";
import { UserRoles } from "../../utiles/constants";
//@ts-ignore
import cookieCutter from 'cookie-cutter'

 
export function LoginUser(dataP:ILogin,router?:any) {
  return function (dispatch: any, getState: any): any {
   (async ()=>{
    try {
      dispatch(loadingAction(true));
      const { status, data }: any =  await repository
        .login(dataP)
        .then((x) => x);
        if (status == 200 && data?.success == true) {

        dispatch(loadingAction(false));
         dispatch(
          messageAction({
            type: 1,
            message: data?.message,
          })
        );

         const decoded: any = jwt_decode(data?.data);
          cookieCutter.set('token', jwt_decode(data.data))

         dispatch(LoginAction({...decoded, token: data?.data }));
         if(getState()?.CurrentBooking!=null)
         {
          let Language=getState()?.Language

          router.push("/" + Language + "/service/checkout")
         
         }
         else
         {

          router.push("/")
         }

            
          
           
      } else {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 1,
            message: data?.message,
          })
        );
      }
    } catch (e) {
       dispatch(loadingAction(false));
      dispatch(
        messageAction({
          type: 0,
          message: e as string,
        })
      );
    }
   })()
  };
}
 
export function RegisterUser(dataP:ILogin,router?:any) {
  return function (dispatch: any, getState: any): any {
   (async ()=>{
    try {
      dispatch(loadingAction(true));
      const { status, data }: any =  await repository
        .register(dataP)
        .then((x) => x);
        if (status == 200 && data?.success == true) {

        dispatch(loadingAction(false));
         dispatch(
          messageAction({
            type: 1,
            message: data?.message,
          })
        );

         const decoded: any = jwt_decode(data?.data);
          cookieCutter.set('token', jwt_decode(data.data))

         dispatch(LoginAction({...decoded, token: data?.data }));
         if(getState()?.CurrentBooking!=null)
         {
          let Language=getState()?.Language

          router.push("/" + Language + "/service/checkout")
         
         }
         else
         {

          router.push("/")
         }

            
          
           
      } else {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 1,
            message: data?.message,
          })
        );
      }
    } catch (e) {
       dispatch(loadingAction(false));
      dispatch(
        messageAction({
          type: 0,
          message: e as string,
        })
      );
    }
   })()
  };
}