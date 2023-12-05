import { slugify } from '../../utils/helpers';
import { Doc503Input, Doc503Output } from '../models/Document503';
import DocumentRepository from '../repositories/DocumentRepository';
import { DocSariInput, DocSariOutput } from '../models/DocumentSari';

interface IDocumentService {
    createDocument(payload: Doc503Input): Promise<Doc503Output>;

    createSariDocument(payload: DocSariInput): Promise<DocSariOutput>;
}

class DocumentService implements IDocumentService {
    async createDocument(payload: Doc503Input): Promise<Doc503Output> {
        return DocumentRepository.createDocument({
            ...payload
        });
    }

    createSariDocument(payload: DocSariOutput): Promise<DocSariOutput> {
        return DocumentRepository.createSariDocument({
            ...payload
        });
    }
}

export default new DocumentService();
