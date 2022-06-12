import { AnyAction, Dispatch } from "redux";
import { IService, IReturnData } from "../../interfaces/data/objects";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { loadingAction } from "../../redux/actionMethodes/loader";
import { messageAction } from "../../redux/actionMethodes/message";
import { addServicesAM, deleteServiceAM, setServicesAM, updateServiceAM } from "../../redux/actionMethodes/Services";
import { repository } from "../../utiles/repository";

export function UpdateVendorStore(dataP:any) {
    return function (dispatch: any, getState: any): any {
     return (async () => {
        try {
            dispatch(loadingAction(true));
           const { status, data }: any = await repository
            .UpdateVendorStore(getState().User?.token || "",{...dataP,
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
             // dispatch(updateECategoryAM(data?.data));
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

  export function UpdateVendorDocuments(dataP:any) {
    return function (dispatch: any, getState: any): any {
     return (async () => {
        try {
            dispatch(loadingAction(true));
           const { status, data }: any = await repository
        .UpdateVendordocuments(getState().User?.token || "",{...dataP,
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
             // dispatch(updateECategoryAM(data?.data));
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

  export function UpdateVendorBank(dataP:any) {
    return function (dispatch: any, getState: any): any {
     return (async () => {
        try {
            dispatch(loadingAction(true));
           const { status, data }: any = await repository
        .UpdateVendorbank(getState().User?.token || "",{...dataP,
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
             // dispatch(updateECategoryAM(data?.data));
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
  export function UpdateVendorVat(dataP:any) {
    return function (dispatch: any, getState: any): any {
     return (async () => {
        try {
            dispatch(loadingAction(true));
           const { status, data }: any = await repository
        .UpdateVendorvat(getState().User?.token || "",{...dataP,
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
             // dispatch(updateECategoryAM(data?.data));
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