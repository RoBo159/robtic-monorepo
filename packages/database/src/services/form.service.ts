import { prisma } from "@robo/db";

export class FormService {
    async create() {

    }

    async find(id : string) {
        const formFound = await prisma.formData.findUnique({
            where: { id },
            include: { questions: true, ticketPanels: true },
        });

        return formFound;
    }
}