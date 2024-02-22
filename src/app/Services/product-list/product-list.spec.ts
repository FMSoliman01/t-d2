import { ProductListService } from "./product-list.service";


describe('Test ProductListService',()=>{
    let service:ProductListService;
    beforeEach(()=>{
      service=new ProductListService();
    })

    it('the array have 9 products',()=>{
        expect(service.Products.length).toEqual(9)
    })
    it('the array have  5 categories ',()=>{
        expect(service.Categories.length).toEqual(5)
    })
    
})