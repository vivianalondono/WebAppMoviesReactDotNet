import { ReactElement } from "react";
import Loading from "./Loading";

export default function GenericList(props: genericListProps){
    if(!props.list){
        if(props.loadingUI){
            return props.loadingUI;
        }else{
            return <Loading />
        }
    }else if (props.list.length === 0){
        if(props.listEmptyUI){
            return props.listEmptyUI;
        }else{
            return <> No hay elementos para mostrar </>
        }
    }else{
        return props.children
    }
}

interface genericListProps {
    list: any;
    children: ReactElement;
    loadingUI?:ReactElement;
    listEmptyUI?: ReactElement;
}