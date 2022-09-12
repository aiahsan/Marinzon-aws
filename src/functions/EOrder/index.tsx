import { AnyAction, Dispatch } from "redux";
import { IService, IReturnData, IEOrder } from "../../interfaces/data/objects";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { loadingAction } from "../../redux/actionMethodes/loader";
import { messageAction } from "../../redux/actionMethodes/message";
import { addEOrderAM, deleteEOrderAM, setEOrderAM, updateEOrderAM } from "../../redux/actionMethodes/EOrder";
import { repository } from "../../utiles/repository";
import { setCountAM } from "../../redux/actionMethodes/Count";

export function GetEOrder(page?:any,search?:any,showApproved?:boolean) {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .GetEOrder(getState().User?.token || "",getState().User?.id,getState().User?.isAdmin,page,search,showApproved)
          .then((x) => x);
        if (status == 200 && data?.success == true) {

          dispatch(loadingAction(false));
          dispatch(
            messageAction({
              type: 1,
              message: data?.message,
            })
          );
          dispatch(setCountAM(data?.count));
          dispatch(setEOrderAM(data?.data));
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
export function AddEOrder(dataP:IEOrder) {
  return function (dispatch: any, getState: any): any {
   return (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .PostEOrder(getState().User?.token || "",dataP)
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
            dispatch(addEOrderAM(data?.data));
            return 1;

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
export function UpdateEOrder(dataP:IEOrder) {
  return function (dispatch: any, getState: any): any {
   return (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .UpdateEOrder(getState().User?.token || "",dataP)
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
            dispatch(updateEOrderAM(data?.data));
            return 1;
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
export function DeleteEOrder(dataP:IEOrder) {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .DeleteEOrder(getState().User?.token || "",{
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
            dispatch(deleteEOrderAM(data?.data));
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

export function UpdateOrderStatus(dataP:IEOrder) {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .UpdateEOrderStatus(getState().User?.token || "",dataP)
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
          
            dispatch(updateEOrderAM(data?.data));
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