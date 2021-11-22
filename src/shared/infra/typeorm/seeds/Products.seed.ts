import Products from "@modules/products/infra/typeorm/entities/Product";

export const ProductsSeed: Products[] = [
  {
    id: "28152883-77c2-45be-9272-f3f4f0393a37",
    name: "Notebook Dell G5 5500",
    description: "Notebook gammer",
    package_quantity: 1,
    package_type: '0dc63e17-75ec-4d94-95b6-de4bf826469e',
    weight: 100,
    price: 5000,
    created_at: new Date(),
    updated_at: new Date()
  }
];
