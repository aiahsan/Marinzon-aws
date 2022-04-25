import { create } from 'apisauce'
// export const mainUrl="https://localhost:44370/"
export const mainUrl="http://ec2-34-205-4-150.compute-1.amazonaws.com/"
export const ImageUrl=mainUrl+"wwwroot/Uploads/"
export const api = create({
    baseURL: mainUrl+'api/',
    headers: { Accept: 'application/vnd.github.v3+json' ,'Content-Type':'application/json'},
   });

  