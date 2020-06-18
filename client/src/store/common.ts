export const initialState = {
    // guided examples
    counter: 0,
    person: {
        age: 0,
        firstName: '',
        lastName: '',
    },
    // real ones
    language: '',
};

export type State = typeof initialState;

export type Action =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'setFirstName'; firstName: string }
    | { type: 'setLastName'; lastName: string }
    | { type: 'setAge'; age: number }
    | { type: 'setLanguage'; language: string };

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1,
            };
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1,
            };
        case 'setFirstName':
            return {
                ...state,
                person: {
                    ...state.person,
                    firstName: action.firstName,
                },
            };
        case 'setLastName':
            return {
                ...state,
                person: {
                    ...state.person,
                    lastName: action.lastName,
                },
            };
        case 'setAge':
            return {
                ...state,
                person: {
                    ...state.person,
                    age: action.age,
                },
            };
        case 'setLanguage':
            return {
                ...state,
                language: action.language,
            };
        default:
            return state;
    }
};
