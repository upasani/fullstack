import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { get_teacher } from '../Redux/teacher/action';
import { useEffect, useState } from 'react';
import './style.css'



export const Home = () => {

    // const dispatch=useDispatch();
    // dispatch(get_teacher());
    // const state=useSelector((state)=>state);
    // console.log(state);
    const [teachData, setData] = useState([]);
    const [sort, getSort] = useState("");
    const [page,setPage]=useState(1);
    console.log(sort);


    const getData = () => {
        fetch(`http://localhost:8080/get-teacher/sorting?srt=${sort}&page=${page}`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err));

    }
    useEffect(() => {
        getData();

    }, [sort,page])
   
    console.log(page)
    return (
        <>

            <div id='pagi'>
               <button onClick={()=>setPage(1)}>1</button>
               <button onClick={()=>setPage(2)}>2</button>
               <button onClick={()=>setPage(3)}>3</button>
               <button onClick={()=>setPage(4)}>4</button>
               <button onClick={()=>setPage(5)}>5</button>
               
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachData.map((e) => (
                            <tr>
                                <td>{e.Name}</td>
                                <td>{e.age}</td>
                                <td>{e.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div id='sort-age'>
                    <button onClick={() => getSort("asc")}>Age_low_high</button>
                    <button onClick={() => getSort('dsc')}>Age_high_low</button>
                </div>

            </div>
        </>
            )
}