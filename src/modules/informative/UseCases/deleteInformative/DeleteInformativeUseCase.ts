import { inject, injectable } from "tsyringe";

import { IInformativeRepository } from "@modules/informative/repositories/IInformativeRepository";

@injectable()
class DeleteInformativeUseCase {

    constructor(
        @inject("InformativeRepository")
        private informativeRepository: IInformativeRepository
    ){}
    async execute(id: string): Promise<void>{
        this.informativeRepository.delete(id);
    }
}

export { DeleteInformativeUseCase }