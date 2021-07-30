import {Item} from "../../domains/item";

const ID = "some_id";
const TITLE = "some_title";
const CONTENT = "some_description";
const IMAGE_URL= "some image";
const LAT= "lat";

const FROM_BACKEND = {
    id: ID,
    title: TITLE,
    description: CONTENT,
    IMAGE: IMAGE_URL,
    LAT: LAT,
};

export const buildItemFromBackend = Item.FromBackend(FROM_BACKEND);

test('Item constructor should build entity', () => {
    const result = new Item(ID, TITLE, CONTENT, IMAGE_URL, LAT);
    expect(result).toEqual({
        "content": "some_description",
        "id": "some_id",
        "title": "some_title",
        "image_url": "some_image",
        "lat" : "lat",
    }
    );
});
test('Item FromBackend should return Item', () => {
    expect(buildItemFromBackend).toBeInstanceOf(Item);
});
