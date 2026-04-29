DentGO es una webapp PWA enfocada en un entorno institucional educativo odontológico. En el caso actual, está pensada para una universidad como la UAM, donde estudiantes de odontología necesitan atender pacientes como parte de sus prácticas clínicas.

La app no funciona como Doctoralia, marketplace libre ni app para elegir odontólogo. El paciente no escoge al estudiante que lo atenderá. El sistema organiza la demanda de pacientes, los procedimientos disponibles y la asignación institucional según semestre, temporada, programa académico o disponibilidad.

OBJETIVO GENERAL

Organizar la captación, solicitud, asignación y seguimiento operativo de pacientes dentro de una institución educativa odontológica.

El problema principal es que los estudiantes necesitan pacientes para cumplir prácticas clínicas, mientras que los pacientes necesitan una forma clara de solicitar atención sin tener que ir físicamente solo a preguntar disponibilidad.

USUARIOS PRINCIPALES

1. Administrador institucional

Funciones esperadas:
- configurar procedimientos disponibles
- fijar precios por procedimiento [sujeto a cambio]
- activar o desactivar procedimientos según semestre o temporada [sujeto a cambio]
- diferenciar procedimientos de pregrado y maestría [sujeto a cambio]
- manejar precios más altos para maestrías [sujeto a cambio]
- ver pacientes atendidos por estudiante
- ver pacientes atendidos por procedimiento
- monitorear solicitudes, citas, demanda y lista de espera
- asignar pacientes manualmente o supervisar asignación automática [sujeto a cambio]
- generar reportes administrativos [sujeto a cambio]

2. Paciente / cliente

Reglas:
- accede únicamente con cédula y correo
- solicita atención por procedimiento o necesidad
- no elige estudiante
- puede ver si un procedimiento está disponible
- si el procedimiento no está disponible en ese semestre/temporada, entra a lista de espera
- se le debe avisar claramente que elegir ese procedimiento implica esperar
- puede ver el estado de su solicitud o cita
- no ve expedientes clínicos
- no paga dentro de la app

Datos del paciente:
- cédula
- correo
- nombre [sujeto a cambio]
- teléfono [sujeto a cambio]
- motivo o procedimiento solicitado
- disponibilidad horaria [sujeto a cambio]

3. Estudiante de odontología

Funciones esperadas:
- ver pacientes o citas asignadas
- ver procedimiento requerido
- registrar si el paciente fue atendido
- registrar asistencia, cancelación o inasistencia
- ver historial operativo de sus atenciones [sujeto a cambio]
- registrar seguimiento básico no clínico [sujeto a cambio]

El estudiante no debería:
- cobrar desde la app
- mostrar expedientes
- recibir pagos
- elegir libremente pacientes sin control institucional [sujeto a cambio]
- tener chat libre sin regulación [sujeto a cambio]

LÓGICA DE PROCEDIMIENTOS

Los procedimientos son configurados institucionalmente.

Cada procedimiento puede tener:
- nombre
- descripción
- precio
- semestre relacionado [sujeto a cambio]
- programa: pregrado o maestría [sujeto a cambio]
- estado: disponible/no disponible
- cupos disponibles [sujeto a cambio]
- temporada activa [sujeto a cambio]

Ejemplos:
- limpieza dental
- operatoria dental
- exodoncia
- periodoncia
- cirugía
- revisión general
- controles posteriores
- procedimientos de maestría

Si un procedimiento no está disponible actualmente, el paciente puede solicitarlo, pero entra en lista de espera.

LISTA DE ESPERA

La lista de espera sirve para registrar demanda de procedimientos no disponibles o sin cupo.

Reglas posibles [sujeto a cambio]:
- ordenar por fecha de solicitud
- ordenar por prioridad
- ordenar por tipo de procedimiento
- notificar cuando se active el procedimiento
- permitir aceptar/rechazar cupo disponible
- permitir al administrador gestionar manualmente la lista

CITAS Y ASIGNACIÓN

Flujo esperado:
1. paciente entra con cédula y correo
2. selecciona procedimiento o necesidad
3. sistema valida si está disponible
4. si está disponible, se crea solicitud/cita pendiente
5. administrador o sistema asigna estudiante [sujeto a cambio]
6. paciente recibe confirmación
7. estudiante ve cita asignada
8. después de la atención, se registra estado operativo

Estados posibles [sujeto a cambio]:
- pendiente
- en revisión
- en lista de espera
- asignado
- confirmado
- atendido
- cancelado
- no asistió
- requiere seguimiento

REPUTACIÓN / CUMPLIMIENTO DEL PACIENTE

Puede existir un historial operativo del paciente [sujeto a cambio].

No es expediente médico. Solo mide comportamiento operativo:
- citas asistidas
- cancelaciones
- inasistencias
- cumplimiento de controles

Uso posible [sujeto a cambio]:
- advertencias
- suspensión temporal
- prioridad reducida
- historial visible para administración
- historial visible parcialmente para estudiante

CHAT PACIENTE-ESTUDIANTE

El chat directo queda como funcionalidad opcional y sujeta a aprobación institucional.

Recomendación:
- no incluir chat libre en el MVP
- priorizar notificaciones controladas
- usar mensajes predefinidos
- permitir confirmaciones, cancelaciones y recordatorios
- evitar diagnóstico por chat
- evitar intercambio de datos sensibles
- no compartir expedientes

Si se implementa después [sujeto a cambio]:
- debe ser auditable
- moderado o supervisado
- limitado a coordinación de cita
- sin información clínica sensible
- con reglas institucionales claras

REGLAS IMPORTANTES DEL SISTEMA

Estas reglas están más firmes:
- será una webapp PWA
- enfoque institucional educativo
- paciente no elige estudiante
- no se muestran expedientes clínicos
- no se cobra comisión
- no se paga dentro de la app
- no se hacen diagnósticos automáticos
- no es marketplace libre
- no es app para doctores privados
- no es Doctoralia
- el sistema organiza demanda, procedimientos, disponibilidad, asignación y seguimiento operativo

PAGOS

La app no procesa pagos.

Puede mostrar precios por procedimiento, pero:
- no cobra dentro de la app
- no recibe comisión
- no integra pasarela de pago
- no maneja facturación en el MVP

La gestión de pago sería externa o institucional [sujeto a cambio].

ALCANCE DEL MVP

Funcionalidades mínimas:
- PWA responsive
- acceso paciente por cédula y correo
- login/admin básico [sujeto a cambio]
- dashboard administrador
- configuración/listado de procedimientos
- activar/desactivar procedimientos
- mostrar precios
- solicitud de procedimiento por paciente
- lista de espera si no hay disponibilidad
- listado de solicitudes
- asignación básica de estudiante [sujeto a cambio]
- vista estudiante con citas asignadas
- registro de atención/asistencia
- estados básicos de solicitud/cita

Funcionalidades opcionales:
- chat directo
- reputación avanzada
- reportes complejos
- notificaciones reales
- asignación automática inteligente
- reglas de suspensión automática
- panel completo de maestrías
- exportación de reportes
- calendario avanzado

DISEÑO FRONTEND

La app debe sentirse:
- moderna
- institucional
- limpia
- confiable
- mobile-first
- fácil de usar
- tipo app aunque sea web

Puede usar:
- cards
- dashboards
- badges de estado
- filtros rápidos
- formularios cortos
- listas de solicitudes
- paneles administrativos
- navegación inferior en móvil [sujeto a cambio]
- sidebar en escritorio [sujeto a cambio]

Evitar:
- diseño demasiado informal
- estética tipo Tinder literal
- mostrar estudiantes como catálogo libre
- lenguaje de marketplace
- pantallas saturadas
- formularios gigantes

TECNOLOGÍA FRONTEND

Stack propuesto:
- React
- Vite
- PWA
- TypeScript [sujeto a cambio]
- componentes modulares
- datos mock inicialmente
- preparado para consumir API REST Spring Boot
- responsive/mobile-first

Arquitectura sugerida:
- components/
- pages/
- layouts/
- services/
- mocks/
- types/
- hooks/
- utils/

MÓDULOS SUGERIDOS

- módulo de autenticación/acceso
- módulo de pacientes
- módulo de estudiantes
- módulo de administrador
- módulo de procedimientos
- módulo de solicitudes
- módulo de citas
- módulo de lista de espera
- módulo de reportes [sujeto a cambio]
- módulo de notificaciones [sujeto a cambio]

RESUMEN EJECUTIVO

DentGO es una PWA institucional para gestionar solicitudes de atención odontológica dentro de una universidad. Permite que pacientes soliciten procedimientos usando cédula y correo, mientras la institución administra procedimientos, precios, disponibilidad por semestre o programa, lista de espera y asignación de estudiantes. No permite elegir estudiante, no muestra expedientes, no cobra pagos ni comisiones. Su objetivo es ordenar el flujo entre pacientes, estudiantes y administración académica.