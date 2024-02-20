import React, { useState } from "react";
import faq from "../../assets/FaqData";
import "./accordian.css"
import MyAccordian from "./MyAccordian";


function  Accodian() {
    const [data, setdata] = useState(faq);

    return (
        <>
        <section className="main-div">
        {
            data.map((curEle)=>{
                const {id, questions, answer} = curEle;
                return <MyAccordian key={id}{...curEle}/>
            })
        }
        </section>
        </>
    )
}

export default Accodian;