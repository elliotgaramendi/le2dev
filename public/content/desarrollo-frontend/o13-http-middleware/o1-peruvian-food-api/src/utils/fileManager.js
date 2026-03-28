import fs from 'fs/promises';

class FileManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async readData() {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      }
      throw new Error(`Error reading file: ${error.message}`);
    }
  }

  async writeData(data) {
    try {
      const jsonData = JSON.stringify(data, null, 2);
      await fs.writeFile(this.filePath, jsonData, 'utf8');
      return true;
    } catch (error) {
      throw new Error(`Error writing file: ${error.message}`);
    }
  }

  async initializeFile(defaultData) {
    try {
      await fs.access(this.filePath);
    } catch (error) {
      await this.writeData(defaultData);
    }
  }
}

export default FileManager;