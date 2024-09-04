import { Header } from "./components/header";
import { ThemeProvider } from "@emotion/react";
import { Colors } from "./theme";
import { CardGrid } from "./components/card-grid";
import { useCallback, useState } from "react";
import { Character } from "./types";
import { CHARACTERS_ARRAY } from "./constants";
import { shuffleCards } from "./helpers/shuffle-cards";

import "react-responsive-modal/styles.css";
import { Modal } from "./components/modal";

/**
 * Constants
 */

export const LOCAL_STORAGE_BEST_SCORE_KEY = "bestScore";

/**
 * App Component
 */

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [cards, setCards] = useState<Character[]>(() =>
    shuffleCards(CHARACTERS_ARRAY.concat(CHARACTERS_ARRAY))
  );
  /** openedCards = cards that are currently opened (flipped). There can be a maximum of 2 cards opened at a time */
  const [openedCards, setOpenedCards] = useState<number[]>([]);
  /** clearedCards = cards that were matched with their pairs */
  const [clearedCards, setClearedCards] = useState<string[]>([]);
  /** boolean to disable cards till cards match evaluation is done */
  const [disableAllCards, setDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const storageBestScoreValue = localStorage.getItem(
    LOCAL_STORAGE_BEST_SCORE_KEY
  );
  const [bestScore, setBestScore] = useState<number>(
    storageBestScoreValue
      ? JSON.parse(storageBestScoreValue)
      : Number.POSITIVE_INFINITY
  );

  const onOpenModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleRestart = useCallback(() => {
    setClearedCards([]);
    setOpenedCards([]);
    setMoves(0);
    setDisableAllCards(false);
    // set a new shuffled deck of cards
    setCards(shuffleCards(CHARACTERS_ARRAY.concat(CHARACTERS_ARRAY)));
  }, []);

  return (
    <ThemeProvider theme={{ Colors }}>
      <Header onRestart={handleRestart} />
      <CardGrid
        bestScore={bestScore}
        cards={cards}
        clearedCards={clearedCards}
        disableAllCards={disableAllCards}
        moves={moves}
        onOpenModal={onOpenModal}
        openedCards={openedCards}
        setBestScore={setBestScore}
        setClearedCards={setClearedCards}
        setDisableAllCards={setDisableAllCards}
        setMoves={setMoves}
        setOpenedCards={setOpenedCards}
      />
      <Modal
        bestScore={bestScore}
        moves={moves}
        openModal={openModal}
        onCloseModal={onCloseModal}
      />
    </ThemeProvider>
  );
};

export default App;
