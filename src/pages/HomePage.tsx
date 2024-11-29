import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from '@ionic/react';
import { FoodSearch } from '../components/FoodSearch';
import { NutrientChart } from '../components/NutrientChart';
import { FavoritesList } from '../components/FavoritesList';

export const HomePage: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState('search');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Caloric Database</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSegment value={selectedTab} onIonChange={e => setSelectedTab(e.detail.value!)}>
            <IonSegmentButton value="search">
              <IonLabel>Search</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="favorites">
              <IonLabel>Favorites</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="stats">
              <IonLabel>Stats</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selectedTab === 'search' && <FoodSearch />}
        {selectedTab === 'favorites' && <FavoritesList />}
        {selectedTab === 'stats' && <NutrientChart data={[]} />}
      </IonContent>
    </IonPage>
  );
};