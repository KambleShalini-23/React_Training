import { useSearchParams } from "react-router-dom"
import Cakelist from "./Cakelist";
export default function Search()
{
    var [query,setQuery] = useSearchParams();
    var name = query.get("name")
    return (
        <>
            <Cakelist searchQuery={name}/>
        </>
    )

}