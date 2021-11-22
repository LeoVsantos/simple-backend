import Package from "@modules/products/infra/typeorm/entities/Package";

export const PackagesSeed: Package[] = [
  {
    id: "109375f0-c42a-4912-ac96-194290d23a4c",
    name: "unidade",
    enable: true,
    package_qtd_max: 1,
    package_qtd_min: 1,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: "0dc63e17-75ec-4d94-95b6-de4bf826469e",
    name: "caixa",
    enable: true,
    package_qtd_max: 10,
    package_qtd_min: 1,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: "f6030c3d-117f-4221-bfb7-319f34e93281",
    name: "pack",
    enable: true,
    package_qtd_max: 20,
    package_qtd_min: 1,
    created_at: new Date(),
    updated_at: new Date()
  }
];
