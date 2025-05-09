import { ActionTypes } from "./actions"

export interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}

interface CyclesState {
    cycles: Cycle[]
    activeCycleId: string | null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cyclesReducer(state: CyclesState, action: any) {
      switch (action.type) {
      case ActionTypes.ADD_NEW_CYCLE:
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id,
        }
      case ActionTypes.INTERRUPT_CURRENT_CYCLE:
        return {
          ...state,
          activeCycleId: null,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() }
            } else {
              return cycle
            }
          })
        }
      case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
        return {
          ...state,
          activeCycleId: null,
          cycles: state.cycles.map((cycle) => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, finishedDate: new Date() }
            } else {
              return cycle
            }
          })
        }
      default:
        return state
      }

    }

export { ActionTypes }

