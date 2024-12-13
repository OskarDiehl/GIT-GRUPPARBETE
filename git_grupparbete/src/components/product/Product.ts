import { IProduct } from "../../models/IProduct";
import { IRating } from "../../models/IRating";

export class Product implements IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}
