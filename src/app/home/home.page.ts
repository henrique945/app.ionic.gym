import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { ExerciseInterface } from '../models/interfaces/exercise.interface';
import { WorkoutInterface } from '../models/interfaces/workout.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    const workout = JSON.parse(localStorage.getItem(environment.keys.workout));

    if (workout)
      this.workout = workout;
  }

  public workout: WorkoutInterface[] = [
    {
      name: 'A',
      exercises: [
        {
          name: 'Pulley Puxada Aberta',
          weight: '8',
        },
        {
          name: 'Pulley Puxada Triângulo',
          weight: '8',
        },
        {
          name: 'Remada Baixa na Polia',
          weight: '40kg',
        },
        {
          name: 'Pulldown',
          weight: '9',
        },
        {
          name: 'Remada Curvada Pegada Pronada',
          weight: '20kg',
        },
        {
          name: 'Desenvolvimento Frontal com Halter',
          weight: '20kg',
        },
        {
          name: 'Desenvolvimento Lateral com Halter',
          weight: '7kg',
        },
        {
          name: 'Remada Alta',
          weight: '8',
        },
        {
          name: 'Elevação Frontal com Halter',
          weight: '8kg',
        },
        {
          name: 'Bíceps Unilateral com Halter',
          weight: '12.5kg',
        },
        {
          name: 'Bíceps Martelo',
          weight: '10kg',
        },
      ],
    },
    {
      name: 'B',
      exercises: [
        {
          name: 'Agachamento Livre',
          weight: '0',
        },
        {
          name: 'Leg Press 45º',
          weight: '0',
        },
        {
          name: 'Cadeira Extensora',
          weight: '0',
        },
        {
          name: 'Levantamento Terra',
          weight: '0',
        },
        {
          name: 'Hack',
          weight: '0',
        },
        {
          name: 'Mesa Flexora',
          weight: '0',
        },
        {
          name: 'Stiff',
          weight: '0',
        },
        {
          name: 'Banco Soléo',
          weight: '0',
        },
        {
          name: 'Panturrilha no Leg Press',
          weight: '0',
        },
      ],
    },
    {
      name: 'C',
      exercises: [
        {
          name: 'Supino Reto Halter',
          weight: '0',
        },
        {
          name: 'Supino Inclinado Halter',
          weight: '0',
        },
        {
          name: 'Crucifixo Inclinado Halter',
          weight: '0',
        },
        {
          name: 'Peck Deck',
          weight: '0',
        },
        {
          name: 'Tríceps Testa',
          weight: '0',
        },
        {
          name: 'Tríceps Pulley Corda',
          weight: '0',
        },
        {
          name: 'Tríceps Francês no Pulley',
          weight: '0',
        },
        {
          name: 'Tríceps Coice Halter',
          weight: '0',
        },
        {
          name: 'Abs Reto',
          weight: '0',
        },
      ],
    },
  ];

  public currentWorkoutName: string = '';

  public changeWorkout(newWorkoutName: string): void {
    this.currentWorkoutName = newWorkoutName;
  }

  public getWorkoutExercises(workoutName: string): ExerciseInterface[] {
    return this.workout.find(i => i.name === workoutName).exercises || [];
  }

  public updateExercise(): void {
    localStorage.setItem(environment.keys.workout, JSON.stringify(this.workout));
    this.changeWorkout('');
  }

  public exportData(): string {
    return 'https://wa.me/5511971908333?text=' + JSON.stringify(this.workout);
  }

}
