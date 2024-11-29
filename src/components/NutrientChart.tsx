import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { NutrientBreakdown } from '../types/food';

interface Props {
  data: NutrientBreakdown[];
}

export const NutrientChart: React.FC<Props> = ({ data }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Nutrient Breakdown</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="calories" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="protein" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="carbs" stackId="1" stroke="#ffc658" fill="#ffc658" />
              <Area type="monotone" dataKey="fat" stackId="1" stroke="#ff8042" fill="#ff8042" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </IonCardContent>
    </IonCard>
  );
};