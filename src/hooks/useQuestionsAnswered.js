import { useContext } from "react";
import { QuestionsAnsweredContext } from "../context/QuestionsAnswered";

export default function useQuestionsAnswered() {
  return useContext(QuestionsAnsweredContext);
}
