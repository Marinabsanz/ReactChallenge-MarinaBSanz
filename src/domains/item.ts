
export class Item {

    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly content: string,
        public readonly image_url: string,
        public readonly lat: string,
      
        
    ) {}

    static FromBackend(data: any) {
        return new Item(
            data.id,
            data.title,
            data.content,
            data.image_url,
            data.lat,
          
           
         
        )
    }

}