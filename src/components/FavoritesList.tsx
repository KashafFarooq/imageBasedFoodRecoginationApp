import React, { useEffect, useState } from 'react';
import { IonList, IonItem, IonLabel, IonBadge, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import { Food } from '../types/food';
import { foodService } from '../services/foodService';

export const FavoritesList: React.FC = () => {
  const [favorites, setFavorites] = useState<Food[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const favoriteFoods = await foodService.getFavorites();
    setFavorites(favoriteFoods);
  };

  return (
    <IonList>
      {favorites.map((food) => (
        <IonItem key={food.id}>
          <IonIcon icon={star} slot="start" color="warning" />
          <IonLabel>
            <h2>{food.name}</h2>
            <p>{food.servingSize} {food.servingUnit}</p>
          </IonLabel>
          <IonBadge slot="end">{food.calories} kcal</IonBadge>
        </IonItem>
      ))}
    </IonList>
  );
};