// SPA navigation
const buttons = document.querySelectorAll('.nav-btn[data-target]');
const sections = document.querySelectorAll('.section');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');

    // Oculta todas las secciones
    sections.forEach(s => s.classList.remove('show'));

    // Muestra la sección seleccionada
    document.querySelector(target).classList.add('show');

    // Subir al inicio suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Botón imprimir
document.getElementById('printBtn').addEventListener('click', () => window.print());

// Theme toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  toggle.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙';
});

// === Estilo de tema claro predeterminado ===
document.documentElement.classList.add('light'); // Blanco al iniciar
toggle.textContent = '☀️';

const style = document.createElement('style');
style.textContent = `
  .light body { background: #ffffff; color: #0b1020; }
  .light .topbar { background: rgba(255,255,255,.9); border-bottom: 2px solid #ccc; }
  .light .brand-text h1, 
  .light .brand-text p { color: #05202a; }
  .light .nav-btn { 
    background: #ffffff; 
    border: 1px solid #ccc; 
    box-shadow: 2px 2px 5px rgba(0,0,0,0.15); 
    transition: transform 0.2s ease, box-shadow 0.2s ease; 
  }
  .light .nav-btn:hover {
    transform: translateY(-2px);
    box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
  }
  .light .badge { background: #eef3ff; border-color: #dbe7ff; color: #2a3a55; }
  .light .card, .light table, .light .hero { background: white; border: 1px solid #ddd; }
  .light thead th { background: #f1f5fb; }
  .light td, .light th { border: 1px solid #ddd; }
`;
document.head.appendChild(style);

// === Datos de la tabla de riesgos ===
const risks = [
  {
    activo: "POS (Punto de venta)",
    amenaza: "Malware/Ransomware",
    vulnerabilidad: "SO desactualizado; macros/USB; correos maliciosos",
    impacto: 5, prob: 3,
    controles: "EDR, segmentación, bloqueo USB, filtrado de correo, backups verificados"
  },
  {
    activo: "Controlador de surtidores (OT)",
    amenaza: "Acceso no autorizado/Manipulación",
    vulnerabilidad: "Credenciales débiles; acceso remoto sin MFA; red plana",
    impacto: 5, prob: 2,
    controles: "VLAN separada, VPN + MFA, listas de control de acceso, registros y alertas"
  },
  {
    activo: "Red Wi-Fi clientes",
    amenaza: "Salto lateral a red interna",
    vulnerabilidad: "Aislamiento insuficiente; cifrado débil",
    impacto: 3, prob: 4,
    controles: "SSID separado/guest, portal cautivo, WPA3, firewall entre VLANs"
  },
  {
    activo: "CCTV/DVR",
    amenaza: "Compromiso remoto/Fuga de video",
    vulnerabilidad: "Contraseñas por defecto; puertos expuestos",
    impacto: 3, prob: 3,
    controles: "Cambiar credenciales, VPN, cerrar puertos, actualizaciones de firmware"
  },
  {
    activo: "Servidor/PC de facturación",
    amenaza: "Pérdida/alteración de datos",
    vulnerabilidad: "Backups no probados; parches pendientes",
    impacto: 5, prob: 2,
    controles: "Backups 3-2-1, pruebas trimestrales de restauración, parches y hardening"
  },
  {
    activo: "Datos personales (clientes/empleados)",
    amenaza: "Fuga de información",
    vulnerabilidad: "Exceso de privilegios; cifrado inexistente",
    impacto: 4, prob: 3,
    controles: "Mínimos privilegios, cifrado, registro de accesos, DLP básico"
  }
];

// Función para clasificar el riesgo
function riskClass(value) {
  if (value >= 17) return ["Crítico", "risk-crit"];
  if (value >= 10) return ["Alto", "risk-high"];
  if (value >= 5) return ["Medio", "risk-med"];
  return ["Bajo", "risk-low"];
}

// Insertar filas en la tabla
const tbody = document.querySelector('#riskTable tbody');
risks.forEach(r => {
  const nivel = r.impacto * r.prob;
  const [label, klass] = riskClass(nivel);
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${r.activo}</td>
    <td>${r.amenaza}</td>
    <td>${r.vulnerabilidad}</td>
    <td>${r.impacto}</td>
    <td>${r.prob}</td>
    <td><span class="chip ${klass}">${nivel} (${label})</span></td>
    <td>${r.controles}</td>
  `;
  tbody.appendChild(tr);
});
