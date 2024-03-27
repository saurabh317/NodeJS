import { FitnessTracker } from "./userEvents.mjs"

//An instance of the FitnessTracker class, used to manage and track user's exercise progress towards the goal.
const tracker = new FitnessTracker()

// Emit a goalReached event when the user reaches their fitness goal.
function congratulatoryMsg () {
  console.log("hurrayy you reached your goal")
}
tracker.addListener("goalReached", congratulatoryMsg)

//addExercise method is expected to take an exercise object with name and caloriesBurned
tracker.addExercise({
  name:'plank',
  caloriesBurned: 100
})
tracker.addExercise({
  name:'curl',
  caloriesBurned: 300
})

