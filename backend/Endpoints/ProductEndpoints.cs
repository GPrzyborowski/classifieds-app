using Microsoft.EntityFrameworkCore;

public static class ProductEndpoints
{
    public static void MapProductEndpoints(this WebApplication app)
    {
        app.MapGet("/", async (AppDbContext db) =>
        {
           return await db.Products.ToListAsync(); 
        });
        app.MapPost("/add", async (Product product, AppDbContext db) =>
        {
            db.Products.Add(product);
            await db.SaveChangesAsync();
            return Results.Created();
        });
        app.MapPatch("/edit", async (int id, Product updated, AppDbContext db) =>
        {
            var product = await db.Products.FindAsync();
            if(product is null)
            {
                return Results.NotFound();
            }
            product.Title = updated.Title;
            product.Condition = updated.Condition;
            product.Price = updated.Price;
            product.Description = updated.Description;
            await db.SaveChangesAsync();
            return Results.Ok(product);
        });
        app.MapDelete("/delete", async (int id, AppDbContext db) =>
        {
            var product = await db.Products.FindAsync(id);
            if(product is null)
            {
                return Results.NotFound();
            }
            db.Products.Remove(product);
            await db.SaveChangesAsync();
            return Results.Ok();
        });
    }
}