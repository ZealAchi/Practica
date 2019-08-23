const API_ENDPOINT="http://localhost:3000";
const STATUSES = [
  { value: 0, label: 'Listo' },
  { value: 1, label: 'En progreso' },
  { value: 2, label: 'Completo' },
];

exports.modules = {
  STATUSES,
  API_ENDPOINT,
};
