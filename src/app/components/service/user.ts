export interface User {
  id?: number,
  name: string,
  cpf: string,
  email: string,
  mobileNumber: string,
  password: string,
  birth: string,
  ethnicity: string,
  lgbtqia: boolean | null,
  disability: string,
  familyIncome: string
}
