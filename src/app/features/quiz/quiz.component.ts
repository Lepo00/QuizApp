import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/core/models/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  count: number;
  quizForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.count = 0;
    this.quizForm = fb.group({
      answer: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.questions = [
      {
        question: "Su quali elementi poggia il piano di marketing?",
        answers: [
          { text: "Mission e vision", selected: false, correct: false },
          { text: "Mission e business plan", selected: false, correct: true },
          { text: "Mission e brand", selected: false, correct: false },
          { text: "Vision e brand", selected: false, correct: false }
        ]
      },
      {
        question: "Quali sono gli strumenti chiave del web marketing?",
        answers: [
          { text: "SEA, SEO, SMA", selected: false, correct: true },
          { text: "SEA, SEO, CEO", selected: false, correct: false },
          { text: "SMA, SEO, CEO", selected: false, correct: false },
          { text: "SEA, SMA, CEO", selected: false, correct: false }
        ]
      },
      {
        question: "Da cosa è composto il business Canvas?",
        answers: [
          { text: "Insieme di aree che aiutano a generare un’azienda", selected: false, correct: false },
          { text: "Insieme delle aree dove l’azienda vuole vendere i propri prodotti", selected: false, correct: false },
          { text: "Insieme delle aree da migliorare in un’azienda", selected: false, correct: false },
          { text: "Insieme dei prodotti che vende un’azienda", selected: false, correct: false }
        ]
      },
      {
        question: "Qual è la definizione corretta di Funnel di vendita?",
        answers: [
          { text: "È l’analisi dei migliori prodotti offerti dall’azienda", selected: false, correct: false },
          { text: "È l’insieme dei clienti dell’azienda", selected: false, correct: false },
          { text: "Sono gli strumenti utili per scegliere il target di clienti a cui vogliamo fare riferimento", selected: false, correct: false },
          { text: "È una serie di passaggi progettati per guidare i visitatori verso una decisione di acquisto", selected: false, correct: true }
        ]
      },
      {
        question: "Qual è la definizione corretta di Advertising (ADV)",
        answers: [
          { text: "È una serie di questionari che l’azienda invia ai propri clienti per ricevere dei feedback", selected: false, correct: false },
          { text: "È un messaggio a pagamento che un'azienda invia con lo scopo di informare o influenzare le persone che lo ricevono riguardo a un prodotto o servizio", selected: false, correct: false },
          { text: "È un messaggio gratuito che un'azienda invia con lo scopo di informare o influenzare le persone che lo ricevono riguardo a un prodotto o servizio", selected: false, correct: false },
          { text: "È un codice che usa l’azienda per tracciare le visualizzazioni delle sue pubblicità", selected: false, correct: true }
        ]
      },
    ]
  }


  inc() {
    const select: number = this.quizForm.get('answer').value;
    this.questions[this.count].answers[select].selected = true;
    this.quizForm.reset();
    this.count++;
  }

  dec() {
    this.count--;
    this.questions[this.count].answers.map((question,index)=>{
      if(question.selected)
      this.quizForm = this.fb.group({
        answer: [index+"", Validators.required]
      });
    })

  }

  submit() {
    const select: number = this.quizForm.get('answer').value;
    this.questions[this.count].answers[select].selected = true;
    this.questions.map((question, index)=>{
      console.log("question "+index);
      question.answers.map((select,index)=>{
        console.log(index+": "+select.selected)
      })
    })
  }

}
