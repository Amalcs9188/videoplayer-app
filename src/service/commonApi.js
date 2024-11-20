
import axios from 'axios';

const commomaoi  = async (httpmethod,url,reqbody)=>{
    let reqConfig ={

        method: httpmethod,
        url,
        data: reqbody,
    }
   return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}
export default commomaoi