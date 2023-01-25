import axios from "axios";
import { IFormInputs } from "../components/utils/Form/Form"

const url = 'http://localhost:3004/feedback';

export const createUser = async (data: IFormInputs) => {
  const response = await axios.post(url, data)
  return response.data
}