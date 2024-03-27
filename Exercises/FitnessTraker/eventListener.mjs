import { FitnessTracker } from "./userEvents.mjs"

const tracker = new FitnessTracker()

// Emit a goalReached event when the user reaches their fitness goal.
function congratulatoryMsg () {
  console.log("hurrayy you reached your goal")
}
tracker.addListener("goalReached", congratulatoryMsg)

tracker.addExercise({
  name:'plank',
  caloriesBurned: 100
})
tracker.addExercise({
  name:'curl',
  caloriesBurned: 300
})

