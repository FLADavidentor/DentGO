import React, { useState } from 'react';
import Button from '../components/common/Button/Button';
import Card from '../components/common/Card/Card';
import Badge from '../components/common/Badge/Badge';
import Input from '../components/common/Input/Input';
import Select from '../components/common/Select/Select';
import Modal from '../components/common/Modal/Modal';
import { useThemeContext } from '../context/ThemeContext';
import './DevPage.css';

const DevPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, setTheme } = useThemeContext();
  const [selectValue, setSelectValue] = useState<string | number>('');

  const colors = [
    { name: 'Primary', var: 'var(--color-primary)' },
    { name: 'Secondary', var: 'var(--color-secondary)' },
    { name: 'Accent', var: 'var(--color-accent)' },
    { name: 'Success', var: 'var(--color-success)' },
    { name: 'Error', var: 'var(--color-error)' },
    { name: 'Warning', var: 'var(--color-warning)' },
    { name: 'Info', var: 'var(--color-info)' },
  ];

  return (
    <div className="dev-page">
      <header className="dev-page__header">
        <h1>Component Gallery & Design System</h1>
        <p>Comprehensive list of all UI elements in DentGO.</p>
      </header>

      {/* --- THEME TOGGLE --- */}
      <section className="dev-section">
        <h2 className="dev-section__title">0. Theme Configuration</h2>
        <div className="dev-row">
          <Button 
            variant={theme === 'light' ? 'primary' : 'outline'} 
            onClick={() => setTheme('light')}
          >
            ☀️ Light
          </Button>
          <Button 
            variant={theme === 'dark' ? 'primary' : 'outline'} 
            onClick={() => setTheme('dark')}
          >
            🌙 Dark
          </Button>
          <Button 
            variant={theme === 'system' ? 'primary' : 'outline'} 
            onClick={() => setTheme('system')}
          >
            🖥️ System
          </Button>
        </div>
        <p style={{ marginTop: 'var(--spacing-sm)', fontSize: 'var(--font-size-sm)' }}>
          Current: <strong>{theme}</strong>
        </p>
      </section>

      {/* --- DESIGN TOKENS --- */}
      <section className="dev-section">
        <h2 className="dev-section__title">1. Design Tokens</h2>
        
        <div className="dev-subsection">
          <h3>Colors</h3>
          <div className="dev-color-grid">
            {colors.map(c => (
              <div key={c.name} className="dev-color-item">
                <div className="dev-color-swatch" style={{ backgroundColor: c.var }}></div>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
          <h3>Semantic Backgrounds</h3>
          <div className="dev-color-grid">
             <div className="dev-color-item">
                <div className="dev-color-swatch" style={{ backgroundColor: 'var(--bg-primary)' }}></div>
                <span>BG Primary</span>
              </div>
              <div className="dev-color-item">
                <div className="dev-color-swatch" style={{ backgroundColor: 'var(--bg-secondary)' }}></div>
                <span>BG Secondary</span>
              </div>
              <div className="dev-color-item">
                <div className="dev-color-swatch" style={{ backgroundColor: 'var(--bg-card)' }}></div>
                <span>BG Card</span>
              </div>
          </div>
        </div>

        <div className="dev-subsection">
          <h3>Typography</h3>
          <div className="dev-type-list">
            <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--text-primary)' }}>Text Primary</p>
            <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--text-secondary)' }}>Text Secondary</p>
          </div>
        </div>
      </section>

      {/* --- BUTTONS --- */}
      <section className="dev-section">
        <h2 className="dev-section__title">2. Buttons</h2>
        <div className="dev-row">
          <Button variant="primary">Primary Action</Button>
          <Button variant="outline">Secondary Action</Button>
          <Button variant="primary" disabled>Disabled State</Button>
        </div>
      </section>

      {/* --- BADGES --- */}
      <section className="dev-section">
        <h2 className="dev-section__title">3. Badges (Status Indicators)</h2>
        <div className="dev-row">
          <Badge status="confirmed" label="Atendido / Confirmado" />
          <Badge status="assigned" label="Asignado" />
          <Badge status="pending" label="Pendiente / Espera" />
          <Badge status="cancelled" label="Cancelado" />
        </div>
      </section>

      {/* --- FORMS --- */}
      <section className="dev-section">
        <h2 className="dev-section__title">4. Forms & Inputs</h2>
        <div className="dev-grid">
          <Input label="Standard Text" placeholder="Type here..." />
          <Input label="Numeric (Mobile Keyboard)" inputMode="numeric" pattern="[0-9]*" placeholder="12345678" />
          <Input label="With Error State" error="This field is required" defaultValue="Wrong value" />
          <Select 
            label="Adaptive Select (Bottom Sheet)"
            value={selectValue}
            onChange={setSelectValue}
            options={[
              { value: '1', label: 'Opción Institucional A' },
              { value: '2', label: 'Opción Institucional B' },
              { value: '3', label: 'Opción Institucional C' },
            ]}
          />
        </div>
      </section>

      {/* --- CARDS --- */}
      <section className="dev-section">
        <h2 className="dev-section__title">5. Cards & Layout Patterns</h2>
        <div className="dev-grid">
          <Card title="Information Card">
            <p>Simple card used for dashboard stats or static info blocks.</p>
          </Card>
          
          <Card title="Interactive Touch Target" interactive onClick={() => alert('Card clicked')}>
            <p>On mobile, this entire card becomes a large, easy-to-hit touch target.</p>
            <div style={{ marginTop: '1rem', textAlign: 'right' }}>
              <Badge status="confirmed" label="Clickable" />
            </div>
          </Card>
        </div>
      </section>

      {/* --- FEEDBACK --- */}
      <section className="dev-section">
        <h2 className="dev-section__title">6. Feedback & Overlays</h2>
        <div className="dev-row">
          <Button variant="outline" onClick={() => setIsModalOpen(true)}>Show Modal / Bottom Sheet</Button>
          
          <Modal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)}
            title="Institutional Modal"
          >
            <div className="dev-modal-demo">
              <p>Adaptive behavior confirmed:</p>
              <ul>
                <li>Desktop: Centered dialog box.</li>
                <li>Mobile: Slide-up Bottom Sheet.</li>
              </ul>
              <div style={{ marginTop: '1.5rem' }}>
                <Button fullWidth onClick={() => setIsModalOpen(false)}>Close View</Button>
              </div>
            </div>
          </Modal>
        </div>
      </section>

      {/* --- LOADING STATES --- */}
      <section className="dev-section">
        <h2 className="dev-section__title">7. Loading & Empty States</h2>
        <div className="dev-grid">
          <Card title="Skeleton Placeholder">
            <div className="dev-skeleton" style={{ height: '1rem', width: '80%', marginBottom: '0.5rem' }}></div>
            <div className="dev-skeleton" style={{ height: '1rem', width: '60%', marginBottom: '1rem' }}></div>
            <div className="dev-skeleton" style={{ height: '2.5rem', width: '100%' }}></div>
          </Card>
          <Card className="u-text-center">
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
            <h3>No hay solicitudes</h3>
            <p>Cuando tengas pacientes asignados, aparecerán aquí.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default DevPage;
