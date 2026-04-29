import React, { useState } from 'react';
import Button from '../components/common/Button/Button';
import Card from '../components/common/Card/Card';
import Badge from '../components/common/Badge/Badge';
import Input from '../components/common/Input/Input';
import Select from '../components/common/Select/Select';
import Modal from '../components/common/Modal/Modal';
import './DevPage.css';

const DevPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="dev-page">
      <h1>Component Gallery / Playground</h1>
      
      <section>
        <h2>Forms (Mobile Optimized)</h2>
        <div className="dev-grid">
          <Input 
            label="Cédula de Identidad" 
            placeholder="Ej: 12345678" 
            inputMode="numeric"
            pattern="[0-9]*"
          />
          <Select 
            label="Programa"
            options={[
              { value: 'pregrado', label: 'Pregrado' },
              { value: 'maestria', label: 'Maestría' }
            ]}
          />
          <Input 
            label="Campo con Error" 
            error="Este campo es obligatorio" 
            defaultValue="Valor inválido"
          />
        </div>
      </section>

      <section>
        <h2>Modals (Adaptive)</h2>
        <div className="dev-row">
          <Button onClick={() => setIsModalOpen(true)}>Abrir Modal / Bottom Sheet</Button>
          <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title="Detalles del Procedimiento"
          >
            <p>En dispositivos móviles, este modal aparece como un "Bottom Sheet" para facilitar el uso con una sola mano.</p>
            <div style={{ marginTop: '20px' }}>
              <Button fullWidth onClick={() => setIsModalOpen(false)}>Entendido</Button>
            </div>
          </Modal>
        </div>
      </section>

      <section>
        <h2>Buttons & Badges</h2>
        <div className="dev-row">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Badge status="confirmed" label="Confirmado" />
          <Badge status="pending" label="Pendiente" />
        </div>
      </section>

      <section>
        <h2>Cards (Interactive targets)</h2>
        <div className="dev-grid">
          <Card title="Card Interactivo" interactive onClick={() => alert('Target grande clickeado')}>
            <p>En móvil, el card completo es un target de toque de 44px+.</p>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
               <Badge status="assigned" label="Click aquí o en card" />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default DevPage;
