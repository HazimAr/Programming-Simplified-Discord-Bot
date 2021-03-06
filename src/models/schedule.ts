import { model, Schema } from "mongoose";

export const scheduleSchema = new Schema({
  tutor: { type: String, required: true },
  student: { type: String, required: true },
  date: { type: Date, required: true },
  subject: { type: String },
  repeats: { type: Boolean },
});

export default model("Schedules", scheduleSchema);
