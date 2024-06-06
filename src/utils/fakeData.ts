import { faker } from "@faker-js/faker";

export function generateFakeData(numRows: number): GenerateData[] {
  const fakeData = [];
  for (let i = 1; i <= numRows; i++) {
    fakeData.push({
      id: faker.string.uuid(),
      company: faker.company.name(),
      type: faker.company.buzzNoun(),
      registrationId: faker.string.uuid(),
      location: faker.location.city(),
      owner: faker.person.firstName(),
    });
  }
  return fakeData;
}

export interface GenerateData {
  id: string;
  company: string;
  type: string;
  registrationId: string;
  location: string;
  owner: string;
}
