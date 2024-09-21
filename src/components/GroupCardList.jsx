import React, { useState } from 'react';
import GroupCard from './GroupCard';
import '../style/GroupCardList.css';

const GroupCardList = () => {
  const [visibleCards, setVisibleCards] = useState(4); // 처음엔 4개 보여줌
  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];

  const handleLoadMore = () => {
    setVisibleCards(visibleCards + 2); // 더보기 버튼 누르면 2개씩 더 보여줌
  };

  return (
    <div>
       <div className="card-list">
        {cards.slice(0, visibleCards).map((card, index) => (
          <GroupCard key={index} content={card} /> // GroupCard 컴포넌트를 사용
        ))}
      </div>

      {visibleCards < cards.length && (
        <button onClick={handleLoadMore}>더보기</button> // 더보기 버튼
      )}
    </div>
  );
};

export default GroupCardList;