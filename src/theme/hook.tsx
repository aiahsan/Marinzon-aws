import { useState, useEffect } from 'react';

 export const  useChangeTheme=()=> {

  const [theme, setTheme] = useState<any>("light");
 

  return [theme, setTheme] 
}
