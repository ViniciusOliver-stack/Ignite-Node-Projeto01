import fs from "node:fs";
import { parse } from "csv-parse";

const csvFilePath = "../../temp/dados.csv"; // Substitua pelo caminho do seu arquivo CSV

const readStream = fs.createReadStream(csvFilePath);

const parser = parse({
  columns: true,
  skip_empty_lines: true,
});

readStream.pipe(parser);

parser.on("readable", async () => {
  let record;
  while ((record = parser.read())) {
    const { title, description } = record;
    const requestBody = { title, description };

    try {
      const response = await fetch("http://localhost:3333/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 201) {
        console.log(`Tarefa "${title}" criada com sucesso.`);
      } else {
        console.error(
          `Erro ao criar a tarefa "${title}". Status: ${response.status}`
        );
      }
    } catch (error) {
      console.error(`Erro ao criar a tarefa "${title}": ${error.message}`);
    }
  }
});

parser.on("end", () => {
  console.log("Importação de CSV concluída.");
});
