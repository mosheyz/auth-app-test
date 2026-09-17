import fs from "fs/promises";

const PATH = "data/profiles.json";

export const readProfileFile = async () => {
    const result = await fs.readFile(PATH, "utf-8");
    if (!result) {
        return await writeProfileFile([]);
    }
    return JSON.parse(result);
};

export const writeProfileFile = async (data) => {
    await fs.writeFile(PATH, JSON.stringify(data, null, 2));
};