import React, { useEffect } from "react";
import style from './CSS/Main.css';
import mockData from '../public/images/game.jpg';
import { FaUserFriends } from "react-icons/fa";
import { RiSignalTowerLine, RiFileList2Fill, RiPercentLine } from "react-icons/ri";
import { HiOutlineClock, HiTag, HiPlus } from "react-icons/hi";
import { IoLogoGameControllerB } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";

export default function Main() {
    useEffect(() => {
        const url = `http://localhost:3000/game`
        fetch(url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
        }).then((result) => {
            result.json().then((resolvedResult) => console.log(resolvedResult))
        })
    }, [])

    return(
        <div className="main-grid-container">
            <div className="grid-item-1">
                <ul className="recommended">
                    <li className="categories">RECOMMENDED</li>
                    <li><FaUserFriends /> By Friends</li>
                    <li><RiSignalTowerLine /> By Curators</li>
                    <li><HiTag /> Tags</li>
                </ul>

                <ul>
                    <li className="categories">DISCOVERY QUEUES</li>
                    <li><RiFileList2Fill /> Recommendations</li>
                    <li><HiPlus /> New Releases</li>
                </ul>

                <ul>
                    <li className="categories">BROWSE CATEGORIES</li>
                    <li><AiOutlineStock /> Top Sellers</li>
                    <li><HiPlus /> New Releases</li>
                    <li><HiOutlineClock /> Upcoming</li>
                    <li><RiPercentLine /> Specials</li>
                    <li><IoLogoGameControllerB /> VR Titles</li>
                    <li><IoLogoGameControllerB /> Controller-Friendly</li>
                </ul>

                <ul>
                    <li className="categories">BROWSE BY GENRE</li>
                    <li>Free to Play</li>
                    <li>Early Access</li>
                    <li>Action</li>
                    <li>Adventure</li>
                    <li>Casual</li>
                    <li>Indie</li>
                    <li>Massively Multiplayer</li>
                    <li>Racing</li>
                    <li>RPG</li>
                    <li>Simulation</li>
                    <li>Sports</li>
                    <li>Strategy</li>
                </ul>
            </div>

            <div className="grid-item-2">
                <h6 className='content-title'>FEATURED AND RECOMMENDED</h6>
                <img className="game-data" src={mockData} alt="game-data" />
            </div>

            <div className="grid-item-3">
                <h6 className='content-title-1'>SPECIAL OFFERS</h6>
                <img className="game-data-1" src={mockData} alt="game-data" />
            </div>

            <div className="grid-item-4">
                <h6 className='content-title-2'>BROWSE BY CATEGORIES</h6>
                <img className="game-data-2" src={mockData} alt="game-data" />
            </div>
        </div>
    )
}