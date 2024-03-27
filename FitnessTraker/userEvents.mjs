// i) Implement the addExercise function to update the progress.
// ii) Emit a goalReached event when the user reaches their fitness goal.
// iii) Set up a listener to send a congratulatory message when the goal is reached.

// Notes:
// The variables used in the program are as follows:
// progress: Represents the current amount of calories the user has burned through exercise.
// goal: Denotes the total amount of calories the user aims to burn.
// tracker: An instance of the FitnessTracker class, used to manage and track user's exercise progress towards the goal.
// The addExercise method is expected to take an exercise object as a parameter with the following structure:
// name: a string representing the name of the exercise
// caloriesBurned: a number representing the amount of calories burned during the exercise

import Events from 'events' // here events is a core module whereas eventEmmiter is class within that

export class FitnessTracker extends Events.EventEmitter {
  progress = 0 //Represents the current amount of calories the user has burned through exercise.
  goal = 500 //Denotes the total amount of calories the user aims to burn.
  addExercise(exercise) {
    console.log('exercise has been added')
    this.progress = this.progress + exercise.caloriesBurned
    if(this.progress >= this.goal) {
      this.emit('goalReached')
    }
  }


}