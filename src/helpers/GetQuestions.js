import { db } from "../firebase";

export const getQuestions = async (category) => {
  let arrayQuestions = [];
  const querySnapshot = await db.collection(category).get();
  querySnapshot.forEach((doc) => {
    arrayQuestions.push(doc.data());
  });
  return arrayQuestions;
};
