import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IServiceItemService } from '../../../interfaces/data/objects';
import TagInput from "../inputs/taginput";

export default ({tags,setTags}:{tags:IServiceItemService[],setTags:any})=>{
  
    const removeTag=(id:string | number)=>{
        setTags([...tags.filter(x=>x.id!=id)]);
    }
    const saveItem=(item:IServiceItemService)=>{
        
        let index = tags.findIndex((x) => x?.id == item.id);

        let obj=tags.find(x=>x.id==item.id);
         if(obj)
        {
            obj.serviceItemServiceTitle=item.serviceItemServiceTitle;
            obj.serviceItemServicePrices=item.serviceItemServicePrices;
            obj.isCompleted=true
            tags[index]=obj;
            console.log(tags,"sssss")
            setTags([...tags]);

        }
        
    }
    return <div className="mt-1">
    <div className="cst-textbox brd-none d-flex  justify-content-between align-items-center ">
      <p>Add Service Item with Price</p>
      <button
        className="btn sakdhsad-dsad"
        type="button"
        onClick={() => {
         setTags([...tags,{
            id:Date.now().toString(),
            serviceItemServiceTitle:'',
            serviceItemServicePrices:[],
            isCompleted:false

        }])
        }}
      >
        <BsFillPlusCircleFill />
      </button>
    </div>
    <div className="d-flex flex-column">
      
      {tags.map((x) => (
        <TagInput title="" tag={x} removeTag={removeTag} saveItem={saveItem} />
      ))}
    </div>
  </div>
}