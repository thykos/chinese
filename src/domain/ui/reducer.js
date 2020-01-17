import { reducerWrapper } from '../../helpers/memorizedStoreBranches';
import { setTitle, setTestQuestions, setQuestionAnswer } from './actions';

const initialState = {
  title: null,
  questions: []
};

const reducerConfigurator = (state = initialState, action) => {
  switch (action.type) {
    case setTitle.type:
      return {
        ...state,
        title: action.payload
      };
    case setTestQuestions.type: {
      const questions = action.payload.map(item => ({ ...item, correct: false }));
      return {
        ...state,
        questions
      };
    }
    case setQuestionAnswer.type: {
      const questions = state.questions.map(item => {
        if (item.pinyin === action.payload.pinyin) {
          return {
            ...item,
            correct: action.payload.correct
          };
        }
        return item;
      });
      return {
        ...state,
        questions
      };
    }

    default:
      return state;
  }
};

const reducer = reducerWrapper(reducerConfigurator, initialState, 'ui');

export { reducer };
