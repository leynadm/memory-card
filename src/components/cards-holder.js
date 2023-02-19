import React, { useEffect, useState } from "react";
import imgDarkMagician from "../images/Dark Magician_Spellcaster_Normal Monster_lvl7_DARK.jpg";
import imgBlueEyesWhiteDragon from "../images/Blue-Eyes White Dragon_Dragon_Normal Monster_lvl8_LIGHT.jpg";
import imgCyberHarpieLady from "../images/Cyber Harpie Lady_Winged Beast_Effect Monster_lvl4_WIND.jpg";
import imgDarkNecrofear from "../images/Dark Necrofear_Fiend_Effect Monster_lvl8_DARK.jpg";
import imgObeliskTheTormentor from "../images/Obelisk the Tormentor_Divine-Beast_Effect Monster_lvl10_DIVINE.jpg";
import imgPerfectlyUltimateGreatMoth from "../images/Perfectly Ultimate Great Moth_Insect_Effect Monster_lvl8_EARTH.jpg";
import imgRedEyesBlackDragon from "../images/Red-Eyes Black Dragon_Dragon_Normal Monster_lvl7_DARK.jpg";
import imgRelinquished from "../images/Relinquished_Spellcaster_Ritual Effect Monster_lvl1_DARK.jpg";
import imgSliferTheSkyDragon from "../images/Slifer the Sky Dragon_Divine-Beast_Effect Monster_lvl10_DIVINE.jpg";
import imgTheWingedDragonOfRa from "../images/The Winged Dragon of Ra_Divine-Beast_Effect Monster_lvl10_DIVINE.jpg";
import imgGravekeeperSupernaturalist from "../images/Gravekeeper's Supernaturalist_Spellcaster_Fusion Monster_lvl7_DARK.jpg";
import imgTheLegendaryFisherman from "../images/The Legendary Fisherman_Warrior_Effect Monster_lvl5_WATER.jpg";
import "../styles/cards-holder.css";
import GameWinner from "./game-winner";

const CardsHolder = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [showWinnerModal, setShowWinnerModal] = useState(false);

  const [randomImages, setRandomImages] = useState([
    {
      src: imgDarkMagician,
      name: "Dark Magician",
    },
    {
      src: imgBlueEyesWhiteDragon,
      name: "Blue Eyes White Dragon",
    },
    {
      src: imgCyberHarpieLady,
      name: "Cyber Harpie Lady",
    },
    {
      src: imgDarkNecrofear,
      name: "Dark Necrofear",
    },
    {
      src: imgObeliskTheTormentor,
      name: "Obelisk The Tormentor",
    },
    {
      src: imgPerfectlyUltimateGreatMoth,
      name: "Perfectly Ultimate Great Moth",
    },
    {
      src: imgRedEyesBlackDragon,
      name: "Red Eyes Black Dragon",
    },
    {
      src: imgRelinquished,
      name: "Relinquished",
    },
    {
      src: imgSliferTheSkyDragon,
      name: "Slifer The Sky Dragon",
    },
    {
      src: imgTheWingedDragonOfRa,
      name: "The Winged Dragon of Ra",
    },
    {
      src: imgGravekeeperSupernaturalist,
      name: "Gravekeeper Supernaturalist",
    },
    {
      src: imgTheLegendaryFisherman,
      name: "The Legendary Fisherman",
    },
  ]);

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

  const onClickScoreCheck = (image) => {
    if (!selectedCards.includes(image.name)) {
      setScore(score + 1);
      setSelectedCards([...selectedCards, image.name]);
    } else {
      setScore(0);
      if (score > bestScore) {
        setBestScore(score);
      }
      setSelectedCards([]);
    }
  };

  useEffect(() => {
    if (score === 12) {
      setShowWinnerModal(true);
      setBestScore(score)
      setScore(0)
    }


  }, [score]);

  const checkGameState = (image) => {
    onClickReshuffle();
    onClickScoreCheck(image);
  };

  const handleShowWinnerClick = () => {
    setShowWinnerModal(false);
  };

  return (
    <div>
      <div className="gameboard">
        <div className="cards-holder">
          {randomImages.map((image, index) => (
            <img
              key={index}
              onClick={() => checkGameState(image)}
              src={image.src}
              className="card-image"
              alt={`card ${index}`}
            />
          ))}
        </div>

        {showWinnerModal && <GameWinner onClose={handleShowWinnerClick} />}
      </div>

      <div className="score-tracker">
        <div className="current-score scoreboard">Current Score: {score}</div>
        <div className="best-score scoreboard">
          {" "}
          Your Best Score: {bestScore}
        </div>
      </div>
    </div>
  );
};

export default CardsHolder;
