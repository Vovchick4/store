import ItemService from "./ItemService.mjs";

class ItemController {
    async create(request, response) {
        try {
            const item = await ItemService.create(request.body, request.files.image);  
            response.json(item);
        } 
        catch (error) {
            response.status(500).json(error);
        }
    };

    async getAll(request, response) {
        try {
            const items = await ItemService.getAll()
            return response.json(items)
        } 
        catch (error) {
            response.status(500).json(error);
        }
    };

    async getOne(request, response) {
        try {
            const item = await ItemService.getOne(request.params.id);
            return response.json(item);
        } 
        catch (error) {
            response.status(500).json(error);
        } 
    };

    async update(request, response) {
        try {
            const updatedItem = await ItemService.update(request.body); 
            return response.json(updatedItem);
        } 
        catch (error) {
            response.status(500).json(error.message);
        }
    };

    async delete(request, response) {
        try {
            const item = await ItemService.delete(request.params.id);
            return response.json(item);
        } 
        catch (error) {
            response.status(500).json(error);
        }
    };
}

export default new ItemController();