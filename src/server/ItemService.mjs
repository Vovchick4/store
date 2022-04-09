import Item from "./Item.mjs";
import FileService from "./FileService.mjs";

class ItemService {
    async create(item, image) {
        const fileName = FileService.saveFile(image)
            const createdItem = await Item.create({...item, image: fileName});   //зберігаємо item в бд, в create передаємо обєкт який відповідає схемі
            return createdItem;
    };

    async getAll() {
            const items = await Item.find(); //якзо без параметрів, то поверне всі айтеми
            return items;
    };

    async getOne(id) {
            if(!id) {
                throw new Error('id is not entered');
            }
            const item = await Item.findById(id);
            return item;
    };

    async update(item) {
            if(!item._id) {
                throw new Error('id is not entered');
            }
            const updatedItem = await Item.findByIdAndUpdate(item._id, item, {new: true}); //new true повертає обновлену версію поста
            return updatedItem;
    };

    async delete(id) {
            if(!id) {
                throw new Error('id is not entered');
            }
            const item = await Item.findByIdAndDelete(id);
            return item;
    };
}

export default new ItemService();