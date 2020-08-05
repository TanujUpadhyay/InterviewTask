export interface Assessment {
  boardname?: string;
  classname?: string;
  subjectname?: string;
  assessmentname?: string;
  questions?: [
    {
      questionDescription: string;
      option1: string;
      option2: string;
      option3: string;
      option4: string;
      answer: string;
      answerDescription: string;
      marks: string;
      imageLinks: string;
    }
  ];
}
