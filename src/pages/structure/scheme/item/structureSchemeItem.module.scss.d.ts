declare namespace StructureSchemeItemModuleScssNamespace {
  export interface IStructureSchemeItemModuleScss {
    active: string;
    children: string;
    head: string;
    icon: string;
    name: string;
    open: string;
    optional: string;
    pattern: string;
    root: string;
  }
}

declare const StructureSchemeItemModuleScssModule: StructureSchemeItemModuleScssNamespace.IStructureSchemeItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StructureSchemeItemModuleScssNamespace.IStructureSchemeItemModuleScss;
};

export = StructureSchemeItemModuleScssModule;
