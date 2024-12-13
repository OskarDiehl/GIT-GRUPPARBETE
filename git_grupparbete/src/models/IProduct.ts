import { IRating } from "./IRating";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

// THE CODE INSIDE IRATING
/* export interface IRating {
    rating: number;
    count: number;
  }
 */
