import {memo, useEffect} from 'react'

export const inPosted = () => {

    useEffect(()=>{
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            
        }
    },[])
  return (
    <>
     <div className=''>
     <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3267119327370040"
     data-ad-slot="7239023930"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
     </div>
    
    </>
   
  )
}
