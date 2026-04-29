import React, { useState } from 'react';
import { mockProcedures } from '../../services/mocks/procedures';
import Card from '../../components/common/Card/Card';
import Button from '../../components/common/Button/Button';
import Badge from '../../components/common/Badge/Badge';
import Modal from '../../components/common/Modal/Modal';
import './PatientDashboard.css';

const PatientDashboard: React.FC = () => {
  const [selectedProc, setSelectedProc] = useState<typeof mockProcedures[0] | null>(null);

  return (
    <div className="patient-dashboard">
      <header className="patient-dashboard__header">
        <h1>Bienvenido</h1>
        <p>Selecciona un procedimiento para solicitar atención.</p>
      </header>

      <section className="patient-dashboard__procedures">
        <h2>Procedimientos Disponibles</h2>
        <div className="patient-dashboard__grid">
          {mockProcedures.map(proc => (
            <Card 
              key={proc.id} 
              title={proc.name} 
              className="procedure-card"
              interactive
              onClick={() => setSelectedProc(proc)}
            >
              <p className="procedure-card__desc">{proc.description}</p>
              <div className="procedure-card__footer">
                <span className="procedure-card__price">${proc.price}</span>
                {proc.available ? (
                  <Badge status="confirmed" label="Disponible" />
                ) : (
                  <Badge status="pending" label="Lista de espera" />
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Modal 
        isOpen={!!selectedProc} 
        onClose={() => setSelectedProc(null)}
        title={selectedProc?.name}
      >
        {selectedProc && (
          <div className="proc-detail">
            <p className="proc-detail__desc">{selectedProc.description}</p>
            <div className="proc-detail__info">
              <span>Precio estimado: <strong>${selectedProc.price}</strong></span>
              <span>Programa: <strong>{selectedProc.program}</strong></span>
            </div>
            
            <div className="proc-detail__actions">
              {selectedProc.available ? (
                <Button fullWidth onClick={() => { alert('Solicitado'); setSelectedProc(null); }}>
                  Confirmar Solicitud
                </Button>
              ) : (
                <>
                  <p className="proc-detail__warning">
                    Este procedimiento no tiene cupos actuales. Te unirás a la lista de espera.
                  </p>
                  <Button variant="outline" fullWidth onClick={() => { alert('Unido a espera'); setSelectedProc(null); }}>
                    Unirse a Lista de Espera
                  </Button>
                </>
              )}
              <Button variant="outline" fullWidth onClick={() => setSelectedProc(null)} className="u-mt-sm">
                Cancelar
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PatientDashboard;
