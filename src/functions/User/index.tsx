import { AnyAction, Dispatch } from "redux";
import { IService, IReturnData, ILogin } from "../../interfaces/data/objects";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { loadingAction } from "../../redux/actionMethodes/loader";
import { messageAction } from "../../redux/actionMethodes/message";
import { addServicesAM, deleteServiceAM, setServicesAM, updateServiceAM } from "../../redux/actionMethodes/Services";
import { deleteUserAM, LoginAction, setUserAM } from "../../redux/actionMethodes/user";
import { repository } from "../../utiles/repository";
import jwt_decode from "jwt-decode";
import { UserRoles } from "../../utiles/constants";

/*
export function GetServices() {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .GetServices(getState().User?.token || "")
          .then((x) => x);
        if (status == 200 && data?.success == true) {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
            dispatch(setServicesAM(data?.data));
        } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message:
                data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
}
export function AddServices(dataP:any) {
   return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .PostServices(getState().User?.token || "",dataP)
          .then((x) => x);
          console.log(status,data)
        if (status == 200 && data?.success == true) {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
            dispatch(addServicesAM(data?.data));
        } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message:
                data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
}
*/
export function UpdateUser(dataP:ILogin,history?:any) {
  return function (dispatch: any, getState: any): any {
   (async ()=>{
    try {
      dispatch(loadingAction(true));
      const { status, data }: any = await repository
        .updateUser(getState().User?.token || "",dataP)
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
           const dataToPush={ ...decoded,Roles:JSON.parse(decoded?.roles)?.map((x:any)=>{
            if(x?.roleId==UserRoles.Admin)
            {
              return "Admin"
            }
            else if(x?.roleId==UserRoles.Support)
            {
              return "Support"
            }
            else if(x?.roleId==UserRoles.User)
            {
              return "User"
            }
            else
            {
              return "User"
  
            }
           })};
           dispatch(LoginAction({...dataToPush, token: data?.data }));
           if( history)
           {
            history.push("/");
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
export function LoginUser(dataP:ILogin,history?:any) {
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
           const dataToPush={ ...decoded,Roles:JSON.parse(decoded?.roles)?.map((x:any)=>{
            if(x?.RoleId==UserRoles.Admin)
            {
              return "Admin"
            }
            else if(x?.RoleId==UserRoles.Support)
            {
              return "Support"
            }
            else if(x?.RoleId==UserRoles.User)
            {
              return "User"
            }
            else if(x?.RoleId==UserRoles.Vendor)
            {
              return "Vendor"
            }
            else
            {
              return "User"
  
            }
           })};
            
           if(dataToPush?.Roles?.includes("Admin") ||dataToPush?.Roles?.includes("Vendor"))
           {
            dispatch(LoginAction({...dataToPush, token: data?.data,isAdmin:dataToPush?.Roles?.includes("Admin") }));
            if( history)
            {
             history.push("/");
            }
           }
           else
           {
            dispatch(loadingAction(false));
            dispatch(
              messageAction({
                type: 3,
                message: "Un-Authorized",
              })
            );
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

export function DeleteUser(dataP:ILogin) {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .DeleteUser(getState().User?.token || "",{
            ...dataP,
            recordUserId:getState().User?.Id
          })
          .then((x) => x);
          console.log(status,data)
        if (status == 200 && data?.success == true) {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
            dispatch(deleteUserAM(data?.data));
        } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message:
                data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
}
export function GetUsers() {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .GetUsers(getState().User?.token || "")
          .then((x) => x);
        if (status == 200 && data?.success == true) {

          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
          console.log(data,"ddddd")
            dispatch(setUserAM(data?.data));
        } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message:
                data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
}
/*
export function DeleteServices(dataP:IService) {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .DeleteServices(getState().User?.token || "",{
            ...dataP,
            recordUserId:getState().User?.id
          })
          .then((x) => x);
          console.log(status,data)
        if (status == 200 && data?.success == true) {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
            dispatch(deleteServiceAM(data?.data));
        } else {
          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 3,
              message:
                data?.message || "Something wen't wrong contact support",
            })
          );
        }
      } catch (e) {
        dispatch(loadingAction(false));
        dispatch(
          messageAction({
            type: 3,
            message: e as string,
          })
        );
      }
    })();
  };
}
*/