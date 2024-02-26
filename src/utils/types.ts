import { Types} from "mongoose";

interface SCHpost {
  title: string;
  desc: string;
  image: string;
  like: Number;
}
interface comment {
  name: string;
  email: string;
  commentSent: string;
  blog: Types.ObjectId;
}
interface ONqueries {
  name: string;
  email: string;
  subject: string;
  message: string;
}


export { SCHpost, comment, ONqueries };
