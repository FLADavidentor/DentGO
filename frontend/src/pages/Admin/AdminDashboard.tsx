import React from 'react';
import { mockProcedures } from '../../services/mocks/procedures';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import Badge from '../../components/common/Badge/Badge';
import './AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard__header">
        <h1>Panel de Administración</h1>
        <div className="admin-dashboard__stats">
          <Card title="Solicitudes">12</Card>
          <Card title="En Espera">5</Card>
          <Card title="Atendidos">48</Card>
        </div>
      </header>

      <section className="admin-dashboard__procedures">
        <div className="section-header">
          <h2>Gestión de Procedimientos</h2>
          <Button variant="primary">+ Nuevo</Button>
        </div>
        
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Programa</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mockProcedures.map(proc => (
              <tr key={proc.id}>
                <td>{proc.name}</td>
                <td>{proc.program}</td>
                <td>${proc.price}</td>
                <td>
                  <Badge 
                    status={proc.available ? 'confirmed' : 'pending'} 
                    label={proc.available ? 'Activo' : 'Inactivo'} 
                  />
                </td>
                <td>
                  <Button variant="outline">Editar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
