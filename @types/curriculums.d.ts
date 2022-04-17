import { SubmitHandler } from 'react-hook-form'

// export interface ITodo {
//   id: number;
//   title: string;
//   description: string;
//   status: boolean;
// }

export type SubmitContextType = {
  register(string, any?): void
  handleSubmit(onSubmit)
  onSubmit: SubmitHandler
}
