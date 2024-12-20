import { useRef } from "react";

export default function useFetch(url : String){
    // const [dataInfo, setDataInfo] = useState({});
    const dataInfo = useRef({allData: '', isloading: false, iserror: false});

    const fetchFunc = (url:any)=>{
        dataInfo.current.isloading = true;
        return fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            dataInfo.current.allData = JSON.stringify(data);
            dataInfo.current.isloading = false;
        })
        .catch((error)=>{
            dataInfo.current.iserror = true;
            console.log(error);
        })
    }
    fetchFunc(url);
    return [dataInfo.current.allData, dataInfo.current.isloading, dataInfo.current.iserror];

    
}