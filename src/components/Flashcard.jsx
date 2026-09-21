import { useState } from 'react';
import './Flashcard.css';

export const cards = [
        { front: "Hello", back: "Привет", color: "#f4cccc" },
        { front: "Goodbye", back: "До свидания", color: "#cfe2f3" },
        { front: "Please", back: "Пожалуйста", color: "#d9ead3" },
        { front: "Thank you", back: "Спасибо", color: "#f4cccc" },
        { front: "How are you?", back: "Как дела?", color: "#cfe2f3" },
        { front: "My name is...", back: "Меня зовут...", color: "#d9ead3" },
        { front: "Good morning", back: "Доброе утро", color: "#f4cccc" },
        { front: "Good night", back: "Спокойной ночи", color: "#cfe2f3" },
        { front: "I don't understand", back: "Я не понимаю", color: "#d9ead3" },
        { front: "See you soon", back: "До скорого", color: "#f4cccc" }
    ]

const Flashcard = () => {

    const [flipped, setFlipped] = useState(false);

    const [currentCard, setCurrentCard] = useState(() => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        return randomIndex;
    });

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleNext = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setFlipped(false);
        setCurrentCard(randomIndex);
    };

  return (
    <div className="flashcard-container">
        <div className="flashcard" onClick={handleFlip} style={{ backgroundColor: cards[currentCard].color }}>
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