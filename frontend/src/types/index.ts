export interface Procedure {
  id: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  program: 'pregrado' | 'maestria';
}

export interface Appointment {
  id: string;
  patientId: string;
  procedureId: string;
  status: 'pending' | 'in_review' | 'waiting_list' | 'assigned' | 'confirmed' | 'attended' | 'cancelled';
  date?: string;
  studentId?: string;
}
