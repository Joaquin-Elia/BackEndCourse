import { MESSAGE_REPOSITORY } from "../repository/manager.repository.js";

export default class MessageServices {
  saveMessage = async (data) => await MESSAGE_REPOSITORY.saveMessage(data);
  getMessages = async () => await MESSAGE_REPOSITORY.getMessages();
}