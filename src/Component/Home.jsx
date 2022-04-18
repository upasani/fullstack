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
    console.log(sort);


    const getData = () => {
        fetch(`http://localhost:8080/get-teacher/sorting?srt=${sort}`)
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err));

    }
    useEffect(() => {
        getData();

    }, [sort])
    const btns = (cb) => {
        return cb();

    }

    return (
        <>

            <div id='pagi'>
                {
                    btns(() => {
                        for (let i = 0; i < 4; i++) {
                            <>
                            <h2>i</h2>
                            </>
                        }
                    })


                }
                


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