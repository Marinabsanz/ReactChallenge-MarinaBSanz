import axios from "axios";
import {Item} from "./item";

const API = "http://localhost:3000/api/v1/posts";

export class ItemService {

    static async fetchItems(): Promise<Item[]> {
        const response = await axios.get(API);
        return response.data.map((item: any) => Item.FromBackend(item))
    }
    static async fetchItem(id: string): Promise<Item> {
        const response = await axios.get(API +"/" + id);
        return response.data ? Item.FromBackend(response.data) : null;
    }
    static async addItem(title: string, content: string  ): Promise<Item[]> {
        const response = await axios.post(API +"/", {
            title,
            content,
           
            
            
        
        });
        return response.data.map((item: any) => Item.FromBackend(item))
    }
}