import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
    const connection = await createConnection();

    const id = uuidV4();
    const password = await hash("fatecsorocaba", 8);

    await connection.query(
        `INSERT INTO users(id, name, birth_date, cell, email, password, rg, cpf, user_role, "isAdmin", created_at)
            VALUES('${id}', 'Leonardo Naoto Hirosue', '1990 09 19', '+5515996558028', 'leonardo.hirosue@gmail.com', '${password}', '476830746', '39101898817', 'tutor', true, 'now()')
        `
    );

    await connection.close();
}

create().then(() => console.log("User admin created!"));