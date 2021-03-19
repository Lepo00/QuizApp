import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';


@NgModule({
  declarations: [QuizComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class QuizModule { }
