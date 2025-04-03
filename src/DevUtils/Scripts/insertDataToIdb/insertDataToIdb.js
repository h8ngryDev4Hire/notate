import TestDataGenerator from './testDataGenerator.js';
import DatabaseAdapter from '@universal/Handlers/IdbHandler.js';

export async function insertTestDataToIdb() {
    const dbAdapter = new DatabaseAdapter('notate');
    const generator = new TestDataGenerator();
    await generator.injectTestData(dbAdapter);
}

