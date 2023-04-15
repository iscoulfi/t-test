import { useMemo } from 'react';
import { CardData } from '../types/appInterface';

export const useSortData = (cards: CardData[], sortValue: string) => {
  const sortedCards = useMemo(() => {
    const sorted = [...cards];
    if (sortValue === 'yearAsc') return sorted.sort((a, b) => a.year - b.year);
    if (sortValue === 'yearDesc') return sorted.sort((a, b) => b.year - a.year);
    if (sortValue === 'priceAsc') return sorted.sort((a, b) => a.price - b.price);
    if (sortValue === 'priceDesc') return sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }, [cards, sortValue]);

  return sortedCards;
};
