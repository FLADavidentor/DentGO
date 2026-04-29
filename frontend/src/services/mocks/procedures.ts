import type { Procedure } from '../../types';

export const mockProcedures: Procedure[] = [
  {
    id: '1',
    name: 'Limpieza Dental',
    description: 'Eliminación de sarro y placa bacteriana.',
    price: 50,
    available: true,
    program: 'pregrado'
  },
  {
    id: '2',
    name: 'Exodoncia Simple',
    description: 'Extracción dental no quirúrgica.',
    price: 80,
    available: true,
    program: 'pregrado'
  },
  {
    id: '3',
    name: 'Cirugía de Cordales',
    description: 'Extracción de terceros molares.',
    price: 300,
    available: false,
    program: 'maestria'
  },
  {
    id: '4',
    name: 'Operatoria Dental',
    description: 'Resinas y calzas.',
    price: 120,
    available: true,
    program: 'pregrado'
  }
];
