import IParseMailTemplateDTTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
    parse(data: IParseMailTemplateDTTO): Promise<string>;
}
