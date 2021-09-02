import React from 'react';
import { useEffect, useState, Component } from 'react';
import "./index.css";
import firstImage from './Images/1.jpg';
import secondImage from './Images/2.jpg';
import thirdImage from './Images/3.jpg';
import forthImage from './Images/4.jpg';
import left from './Images/chevron-left.svg';
import right from './Images/chevron-right.svg';
function App() {
    const [infos, setInfos] = useState([
        {
            id: 1,
            title: "Welcome to our website!",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: firstImage
        },
        {
            id: 2,
            title: "Build a website for business.",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: secondImage
        },
        {
            id: 3,
            title: "Using JavaScript Library.",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: thirdImage
        },
        {
            id: 4,
            title: "Responsive website design.",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: forthImage
        }
    ]);
    const [number, setNumber] = useState(0);
    const background = {
        backgroundImage: `url(${infos[number].image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
    function nextPage() {
        setNumber(number + 1)
        if (number >= infos.length - 1) {
            setNumber(0)
        }
    }
    function prevPage() {
        setNumber(number - 1);
        if (number < 1) {
            setNumber(infos.length - 1);
        }
    }
    return (
        <section className="container" style={background}>
            <div className="text">
                <h1>{infos[number].title}</h1>
                <div style={{ width: "200px", height: "0.1em", backgroundColor: "orangered", margin: "0 0 0.5em 0" }}></div>
                <p>{infos[number].text}</p>
            </div>
            <div className="btn">
                <button onClick={prevPage}><img src={left} /></button>
                <button onClick={nextPage}><img src={right} /></button>
            </div>
        </section>
    )
}
export default App;