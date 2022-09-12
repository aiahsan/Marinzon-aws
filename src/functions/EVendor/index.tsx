import { AnyAction, Dispatch } from "redux";
import { IService, IReturnData } from "../../interfaces/data/objects";
import { IReduxStore } from "../../interfaces/data/reduxStore";
import { loadingAction } from "../../redux/actionMethodes/loader";
import { messageAction } from "../../redux/actionMethodes/message";
import { addEVendorAM, deleteEVendorAM, setEVendorAM, updateEVendorAM } from "../../redux/actionMethodes/EVendor";
import { repository } from "../../utiles/repository";
import { setCountAM } from "../../redux/actionMethodes/Count";

export function GetEVendor(page?:any,search?:any,showApproved?:boolean) {
  return function (dispatch: any, getState: any): any {
    (async () => {
      try {
        dispatch(loadingAction(true));
         const { status, data }: any = await repository
          .getvendors(getState().User?.token || "",getState().User?.id,getState().User?.isAdmin,page,search,showApproved)
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

             dispatch(setEVendorAM(data?.data));
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
