import axios from "axios";
import { ADD_ASSESSMENT, GET_QUESTIONS } from "./routes";

export const getQustions = async (
  mobileNo: number,
  boardname: string,
  classname: string,
  subjectname: string
) => {
  const response = await axios.get(GET_QUESTIONS, {
    params: {
      mobileNo,
      boardname,
      classname,
      subjectname,
    },
  });
  return response.data;
};

export const addAssessment = async (assessment: object) => {
  const response = await axios.put(ADD_ASSESSMENT, assessment);
  return response;
};
