import React, { useState } from "react";
import imgDarkMagician from "../images/Dark Magician_Spellcaster_Normal Monster_lvl7_DARK.jpg"
import imgBlueEyesWhiteDragon from "../images/Blue-Eyes White Dragon_Dragon_Normal Monster_lvl8_LIGHT.jpg"
import imgCyberHarpieLady from "../images/Cyber Harpie Lady_Winged Beast_Effect Monster_lvl4_WIND.jpg"
import imgDarkNecrofear from "../images/Dark Necrofear_Fiend_Effect Monster_lvl8_DARK.jpg"
import imgObeliskTheTormentor from "../images/Obelisk the Tormentor_Divine-Beast_Effect Monster_lvl10_DIVINE.jpg"
import imgPerfectlyUltimateGreatMoth from "../images/Perfectly Ultimate Great Moth_Insect_Effect Monster_lvl8_EARTH.jpg"
import imgRedEyesBlackDragon from "../images/Red-Eyes Black Dragon_Dragon_Normal Monster_lvl7_DARK.jpg"
import imgRelinquished from "../images/Relinquished_Spellcaster_Ritual Effect Monster_lvl1_DARK.jpg"
import imgSliferTheSkyDragon from "../images/Slifer the Sky Dragon_Divine-Beast_Effect Monster_lvl10_DIVINE.jpg"
import imgTheWingedDragonOfRa from "../images/The Winged Dragon of Ra_Divine-Beast_Effect Monster_lvl10_DIVINE.jpg"

const CardsHolder = () => {

    const [randomImages, setRandomImages] = useState([
        imgDarkMagician,
        imgBlueEyesWhiteDragon,
        imgCyberHarpieLady,
        imgDarkNecrofear,
        imgObeliskTheTormentor,
        imgPerfectlyUltimateGreatMoth,
        imgRedEyesBlackDragon,
        imgRelinquished,
        imgSliferTheSkyDragon,
        imgTheWingedDragonOfRa])

    const onClickReshuffle = () => {
        setRandomImages(shuffleArray([...randomImages]));
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <div className="cards-holder">
            {randomImages.map((image, index) => (
                <img key={index} onClick={onClickReshuffle} src={image} alt={`card ${index}`} />
            ))}
        </div>
    )
}

export default CardsHolder