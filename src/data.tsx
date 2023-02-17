export interface Data {
  name: string;
  title: string;
  post: string;
  id: string;
}

export const fakeDB: Data[] = [
  { name: "Roger", title: "Teste", post: "Testando fake DB", id: "roger-1" },
];
