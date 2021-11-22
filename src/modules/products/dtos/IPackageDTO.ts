export default interface IPackageDTO {
  name: string;
  enable: boolean,
	package_qtd_min?: number | undefined,
	package_qtd_max?: number | undefined,
}
