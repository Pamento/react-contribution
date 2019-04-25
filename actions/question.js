import types from "../constants/actionTypes";

export const addQuestions = (questions) => {
  return { type: types.ADD_QUESTIONS, questions: questions };
};
export const searchQuestions = (terms) => {
    return { type: types.SEARCH_QUESTION, terms: terms };
  };

export const fetchQuestions = () => {
    return async(dispatch) => {
        try {
            const QUESTIONS = [
                {
                  id: "01",
                  title: "Question 1 à propos de ",
                  date: "09/10/2018",
                  author: "Jean-Michel",
                  content: "Ici gît le corps de ma question 1",
                  upvote: 0,
                  answers: [
                    {
                      id: "6",
                      author: "Marie-Béatrice",
                      karma: 0,
                      content: "La super réponse de Marie-Béatrice",
                      date: "09/10/2018"
                    },
                    {
                      id: "7",
                      author: "Marie-Béatrice",
                      karma: 0,
                      content: "La nouvelle réponse de Marie-Béatrice",
                      date: "09/10/2018"
                    },
                    {
                      id: "9",
                      author: "Jean-Michel",
                      karma: 0,
                      content: "La réponse de Jean-Michel à Marie-Béatrice",
                      date: "09/10/2018"
                    },
                    {
                      id: "19",
                      author: "Marie-Béatrice",
                      karma: 0,
                      content: "La réponse de Marie-Béatrice à Jean-Michel",
                      date: "09/10/2018"
                    },
                    {
                      id: "109",
                      author: "Al Capone",
                      karma: 90,
                      content: "Le dernier mot est donné par Al Capone",
                      date: "09/10/2018"
                    }
                  ],
                  factory: "Villeurbanne",
                  tag: "php"
                },
                {
                  id: "02",
                  title: "Question 2 à propos de ",
                  date: "09/11/2018",
                  author: "Thor",
                  content: "Ici est le corps de ma question 2",
                  upvote: 3,
                  answers: [
                    {
                      id: "555",
                      author: "JCVD",
                      karma: 7,
                      content: "La super réponse de JCVD",
                       date: "09/10/2018"
                    }
                  ],
                  factory: "Vénissieux",
                  tag: "mysql"
                },
                {
                  id: "03",
                  title: "Question 3 à propos de ",
                  date: "05/11/2016",
                  author: "Garcimore",
                  content: "Ici est le corps de ma question 3",
                  upvote: 2,
                  answers: [
                    {
                      id: "666",
                      author: "Le pape",
                      karma: 7,
                      content: "La super réponse du Pape",
                      date: "09/10/2018"
                    }
                  ],
                  factory: "Roanne",
                  tag: "css"
                },
                {
                  id: "04",
                  title: "Question 4 à propos de ",
                  date: "05/04/2017",
                  author: "Casimir",
                  content: "Ici est le texte de la question 4",
                  upvote: 0,
                  answers: [
                    {
                      id: "11",
                      author: "Messi",
                      karma: 77,
                      content: "La super réponse de Messi",
                      date: "09/10/2018"
                    }
                  ],
                  factory: "Montpellier",
                  tag: "Ruby"
                },
                {
                  id: "05",
                  title: "Question 5 à propos de ",
                  date: "05/04/2017",
                  author: "Casimir",
                  content: "Ici est le texte de la question 5",
                  upvote: 0,
                  answers: [
                    {
                      id: "55",
                      author: "Messi",
                      karma: 77,
                      content: "La super réponse de Messi",
                      date: "09/10/2018"
                    },
                    {
                      id: "999",
                      author: "Le Messie",
                      karma: 888,
                      content: "La super réponse du Messie",
                      date: "09/10/2018"
                    }
                  ],
                  factory: "Montpellier",
                  tag: "Ruby"
                },
                {
                  id: "06",
                  title: "Question 6 à propos de ",
                  date: "05/04/2017",
                  author: "Casimir",
                  content: "Ici est le texte de la question 6",
                  upvote: 0,
                  answers: [
                    {
                      id: "55",
                      author: "Messi",
                      karma: 77,
                      content: "La super réponse de Messi",
                      date: "09/10/2018"
                    },
                    {
                      id: "999",
                      author: "Le Messie",
                      karma: 888,
                      content: "La super réponse du Messie",
                      date: "09/10/2018"
                    }
                  ],
                  factory: "Montpellier",
                  tag: "Ruby"
                },
                {
                  id: "07",
                  title: "Question 7 à propos de ",
                  date: "05/04/2017",
                  author: "Casimir",
                  content: "Ici est le texte de la question 7",
                  upvote: 0,
                  answers: [
                    {
                      id: "55",
                      author: "Messi",
                      karma: 77,
                      content: "La super réponse de Messi",
                      date: "09/10/2018"
                    },
                    {
                      id: "999",
                      author: "Le Messie",
                      karma: 888,
                      content: "La super réponse du Messie",
                      date: "09/10/2018"
                    }
                  ],
                  factory: "Montpellier",
                  tag: "Ruby"
                },
                {
                  id: "08",
                  title: "Question 8 à propos de ",
                  date: "05/04/2017",
                  author: "Casimir",
                  content: "Ici est le texte de la question 8",
                  upvote: 0,
                  answers: [
                    {
                      id: "55",
                      author: "Messi",
                      karma: 77,
                      content: "La super réponse de Messi",
                      date: "09/10/2018"
                    },
                    {
                      id: "999",
                      author: "Le Messie",
                      karma: 888,
                      content: "La super réponse du Messie",
                      date: "09/10/2018"
                    }
                  ],
                  factory: "Montpellier",
                  tag: "Ruby"
                }
              ];
              dispatch(addQuestions(QUESTIONS))
              return new Promise((resolve, reject) => {  
                  QUESTIONS ? resolve(QUESTIONS) : reject('Error');  
              })
            
            
        } catch(e) {
            console.log(e);
            
          //dispatch(err("failed to retrieve data"));
        }
      };
}
