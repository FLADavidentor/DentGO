import type { Appointment } from '../../types';

export const mockAppointments: Appointment[] = [
  {
    id: 'a1',
    patientId: 'p1',
    procedureId: '1',
    status: 'assigned',
    date: '2026-05-01 09:00',
    studentId: 's1'
  },
  {
    id: 'a2',
    patientId: 'p2',
    procedureId: '2',
    status: 'confirmed',
    date: '2026-05-02 10:30',
    studentId: 's1'
  }
];
