import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    DividerModule,
    InputTextModule,
    CardModule,
    AvatarModule,
  ],
})
export class PrimengModule {}
