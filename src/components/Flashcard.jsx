import { useState } from 'react';
import './Flashcard.css';

const Flashcard = () => {

    const cards = [
        { front: "Hello", back: "Привет" },
        { front: "Goodbye", back: "До свидания" },
        { front: "Please", back: "Пожалуйста" },
        { front: "Thank you", back: "Спасибо" },
        { front: "How are you?", back: "Как дела?" },
        { front: "My name is...", back: "Меня зовут..." },
        { front: "Good morning", back: "Доброе утро" },
        { front: "Good night", back: "Спокойной ночи" },
        { front: "I don't understand", back: "Я не понимаю" },
        { front: "See you soon", back: "До скорого" }
    ]

    const [flipped, setFlipped] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleNext = () => {
        setFlipped(false);
        setCurrentCard((currentCard + 1) % cards.length);
    };

  return (
    <div className="flashcard-container">
        <div className="flashcard" onClick={handleFlip}>
            <p>
                {flipped ? cards[currentCard].back : cards[currentCard].front}
            </p>
        </div>
        <button onClick={handleNext}>
            Next
        </button>
    </div>
  )
}

export default Flashcard