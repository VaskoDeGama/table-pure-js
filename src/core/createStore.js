export function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, {type: '__INIT__'})
  let subscribers = []

  return {
    subscribe(fn) {
      subscribers.push(fn)
      return {
        unsubscribe() {
          subscribers = subscribers.filter(s => s !== fn)
        }
      }
    },
    dispatch(action) {
      state = rootReducer(state, action)
      subscribers.forEach(s => s(state))
    },
    getState() {
      return state
    }
  }
}


// export class Store {
//   constructor(rootReducer, initialState = {}) {
//     this.rootReducer = rootReducer
//     this.state = this.rootReducer({...initialState}, {type: '__INIT__'})
//     this.subscribers = []
//   }
//
//   subscribe(fn) {
//     this.subscribers.push(fn)
//     return {
//       unsubscribe: () => {
//         this.subscribers = this.subscribers.filter(s => s !== fn)
//       }
//     }
//   }
//
//   dispatch(action) {
//     this.state = this.rootReducer(this.state, action)
//     this.subscribers.forEach(s => s(this.state))
//   }
//
//   getState() {
//     return this.state
//   }
// }
