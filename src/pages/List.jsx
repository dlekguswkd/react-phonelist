//import 라이브러리
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//import 컴포넌트
import ItemPerson from './ItemPerson';

//import css


const List = () => {
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/
    const [personList, setPersonList] = useState([]);


    /*---일반 메소드 --------------------------------------------*/
    const getPersonList = ()=> {

        axios({
            method: 'get',          
            url: `${process.env.REACT_APP_API_URL}/api/persons`,       
        
            responseType: 'json'
        }).then(response => {
            console.log(response.data.apiData); 
            setPersonList(response.data.apiData);

        }).catch(error => {
            console.log(error);
        });

    };


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    // 마운트 됐을때
    useEffect(()=>{

        getPersonList();    

    }, []);


    return (
        <>
            <h1>전화번호부</h1>

            <h2>전화번호-리스트</h2>

            <p>등록된 전화번호 리스트 입니다.</p>

            {personList.map((personVo)=>{
                return(
                    <div>     
                        <ItemPerson key={personVo.personId}     
                                    person={personVo}       
                        />
                    </div>
                )
            })}
        
            <br />
            <Link to="" rel="noreferrer noopener">등록폼으로 이동</Link>

        </>
    );
}

export default List;