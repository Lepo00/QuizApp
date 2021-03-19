import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() { }

  questions: string[] = [
    "su quali elementi poggia il piano di marketing?",
    "quali sono gli strumenti chiave del web marketing?",
    "da cosa è composto il business Canvas?",
    "qual è la definizione corretta di Funnel di vendita?",
    "qual è la definizione corretta di Advertising (ADV)?"
  ];
  answers: string[] = [
    "Mission e vision",
    "Mission e business plan",
    "Mission e brand",
    "Vision e brand"
  ];

  ngOnInit(): void {
  }

}
