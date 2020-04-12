let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: 'data:image/jpeg;base64,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',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'data:image/jpeg;base64,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',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: 'data:image/png;base64,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',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}


export function _removeQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            answers: delete users[authedUser].answers[qid]
          }
        }
      }


      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.filter(voter => voter !== authedUser)
          }
        }
      }

      res()
    }, 500)
  })
}