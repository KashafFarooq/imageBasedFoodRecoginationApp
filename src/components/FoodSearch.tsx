import React, { useState } from 'react';
import { IonSearchbar, IonList, IonItem, IonLabel, IonBadge } from '@ionic/react';
import { Food } from '../types/food';
import { foodService } from '../services/foodService';

export const FoodSearch: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Food[]>([]);

  const handleSearch = async (query: string) => {
    if (query.length > 2) {
      const results = await foodService.searchFoods(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="ion-padding">
      <IonSearchbar
        placeholder="Search foods..."
        debounce={300}
        onIonInput={(e) => handleSearch(e.detail.value!)}
      />
      <IonList>
        {searchResults.map((food) => (
          <IonItem key={food.id}>
            <IonLabel>
              <h2>{food.name}</h2>
              <p>{food.servingSize} {food.servingUnit}</p>
            </IonLabel>
            <IonBadge slot="end">{food.calories} kcal</IonBadge>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};