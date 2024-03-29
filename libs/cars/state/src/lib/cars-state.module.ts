import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { initialState as carsInitialState, carsReducer } from './+state/cars.reducer';
import { CarsEffects } from './+state/cars.effects';
import { CarsFacade } from './+state/cars.facade';

@NgModule({
  imports: [
    StoreModule.forFeature('cars', carsReducer, {
      initialState: carsInitialState
    }),
    EffectsModule.forFeature([CarsEffects])
  ],
  providers: [CarsFacade]
})
export class CarsStateModule {}
