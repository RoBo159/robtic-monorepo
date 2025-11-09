import { prisma } from "packages/database/db";

export class FormService {
    async create() {

    }

    async find(formId : string) {
        const formFound = await prisma.formData.findUnique({
            where: { id: formId },
            include: { questions: true },
        });

        return formFound;
    }
}