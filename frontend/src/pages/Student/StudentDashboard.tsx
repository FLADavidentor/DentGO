import React from 'react';
import { mockAppointments } from '../../services/mocks/appointments';
import { mockProcedures } from '../../services/mocks/procedures';
import Card from '../../components/common/Card/Card';
import Badge from '../../components/common/Badge/Badge';
import Button from '../../components/common/Button/Button';
import './StudentDashboard.css';

const StudentDashboard: React.FC = () => {
  return (
    <div className="student-dashboard">
      <header className="student-dashboard__header">
        <h1>Mis Citas Asignadas</h1>
        <p>Gestiona la asistencia de tus pacientes.</p>
      </header>

      <div className="student-dashboard__list">
        {mockAppointments.map(app => {
          const procedure = mockProcedures.find(p => p.id === app.procedureId);
          return (
            <Card key={app.id} className="appointment-card">
              <div className="appointment-card__header">
                <Badge status={app.status as any} label={app.status} />
                <span className="appointment-card__date">{app.date}</span>
              </div>
              <div className="appointment-card__body">
                <h3>{procedure?.name}</h3>
                <p>Paciente ID: {app.patientId}</p>
              </div>
              <div className="appointment-card__actions">
                <Button variant="primary">Registrar Asistencia</Button>
                <Button variant="outline">No Asistió</Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StudentDashboard;
