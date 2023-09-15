export class CreateMaterialDto {
  name?: string;
  code?: string;
  groupId?: number;
  sourceChannel?: number;
  type?: number;
  templateUrl?: string;
  templateFileId?: number;
  templateFileName?: string;
  demoFileId?: number;
  demoFileName?: string;
  demoUrl?: string;
  demoDescription?: string;
  templateCusContent?: string;
  legalSizeLimit?: string;
  legalFormats?: string;
  legalPageSize?: number;
  legalIsShare?: number;
  treeStructureId?: number;
}
