using _5_Angular_PrimeNG_Grid.Models;
using Codify.DataAccess;
using Codify.DataAccess.Product.Repository;
using Codify.DataAccess.Product.Repository.Interface;
using Codify.Entity.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace _5_Angular_PrimeNG_Grid.Controllers.API
{
    [Route("ProductService")]
    public class ProductAPIController : ApiController
    {
        [Route("ProductService")]
        [HttpGet]
        public string Info()
        {
            return "This is ProductService";
        }

        [System.Web.Http.HttpGet]
        [System.Web.Http.Route("ProductService/GetAllProducts")]
        public IHttpActionResult GetAllProducts()
        {
            IProductRepository productRepo = new ProductRepository(new CodifyDataContext());
            List<ProductModel> productModelList = new List<ProductModel>();
            List<ProductEntity> productEntityList = productRepo.GetAllProducts();

            if (productEntityList != null && productEntityList.Count > 0)
            {
                foreach (ProductEntity prodEntity in productEntityList)
                {
                    ProductModel prodModel = new ProductModel();
                    prodModel.ProductId = prodEntity.Id;
                    prodModel.ProductName = prodEntity.ProductName;
                    prodModel.UnitPrice = prodEntity.UnitPrice;
                    productModelList.Add(prodModel);
                }
            }
            return Ok(productModelList);
        }

        [HttpPost]
        [Route("ProductService/SaveProduct")]
        public IHttpActionResult SaveProduct(ProductModel product)
        {
            try
            {
                IProductRepository productRepo = new ProductRepository(new CodifyDataContext());
                ProductEntity prodEntity = new ProductEntity();

                prodEntity.Id = product.ProductId;
                prodEntity.ProductName = product.ProductName;
                prodEntity.UnitPrice = product.UnitPrice;
                prodEntity.CreatedBy = System.Environment.UserName;
                prodEntity.ModifiedBy = System.Environment.UserName;
                prodEntity.CreatedDate = DateTime.Now;
                prodEntity.ModifiedDate = DateTime.Now;

                productRepo.AddProduct(prodEntity);
                productRepo.SaveChanges();
                return Ok("Success");
            }
            catch (Exception ex)
            {
                return Ok(ex.Message);
            }
        }
    }
}
