import { AnyAction, Dispatch } from "redux";
import { IService, IReturnData, IECategory } from "../../interfaces/data/objects";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { loadingAction } from "../../redux/actionMethodes/loader";
import { messageAction } from "../../redux/actionMethodes/message";
import { addECategoryAM, deleteECategoryAM, setECategoryAM, updateECategoryAM } from "../../redux/actionMethodes/ECategory";
import { repository } from "../../utiles/repository";
import { setCountAM } from "../../redux/actionMethodes/Count";

export function GetECategory(page?:any,search?:any,showApproved?:boolean) {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .GetECategory(getState().User?.token || "",getState().User?.id,getState().User?.isAdmin,page,search,showApproved)
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

            dispatch(setECategoryAM(data?.data));

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
export function AddECategory(dataP:IECategory) {
  return function (dispatch: any, getState: any): any {
   return (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .PostECategory(getState().User?.token || "",dataP)
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
            dispatch(addECategoryAM(data?.data));
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
export function UpdateECategory(dataP:IECategory) {
  return function (dispatch: any, getState: any): any {
   return (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .UpdateECategory(getState().User?.token || "",dataP)
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
            dispatch(updateECategoryAM(data?.data));
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
export function DeleteECategory(dataP:IECategory) {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .DeleteECategory(getState().User?.token || "",{
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
            dispatch(deleteECategoryAM(data?.data));
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