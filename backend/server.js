:root {
  --primary-bg: #f4f7fb;
  --card-bg: #ffffff;
  --primary-blue: #2563eb;
  --primary-dark: #1e3a8a;
  --primary-soft: #dbeafe;
  --success: #16a34a;
  --warning: #f59e0b;
  --danger: #dc2626;
  --text: #1f2937;
  --muted: #6b7280;
  --border: #dfe7f1;
  --shadow: 0 12px 28px rgba(15, 23, 42, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, #eef5ff 0%, #f9fafb 100%);
  color: var(--text);
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

#root {
  min-height: 100vh;
}

.app-shell {
  min-height: 100vh;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, #0f172a, #1d4ed8);
  color: white;
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.nav-links {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  transition: 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}

.page-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.dashboard-card,
.form-card {
  padding: 1.5rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.eyebrow {
  margin: 0 0 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--primary-blue);
  font-weight: 700;
  font-size: 0.75rem;
}

h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;
}

th,
td {
  padding: 0.9rem 0.8rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}

th {
  background: #f8fafc;
  font-size: 0.9rem;
  color: var(--muted);
}

tbody tr:hover {
  background: #f8fbff;
}

.action-group {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.button {
  appearance: none;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: 0.2s ease;
}

.button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.primary-button {
  background: var(--primary-blue);
  color: white;
  padding: 0.8rem 1.2rem;
}

.primary-button:hover:not(:disabled) {
  background: var(--primary-dark);
}

.secondary-button {
  background: #e0e7ff;
  color: var(--primary-dark);
  padding: 0.8rem 1.2rem;
}

.secondary-button:hover {
  background: #c7d2fe;
}

.danger-button {
  background: #fee2e2;
  color: var(--danger);
  padding: 0.8rem 1.2rem;
}

.danger-button:hover {
  background: #fecaca;
}

.small-button {
  padding: 0.6rem 0.9rem;
  font-size: 0.9rem;
}

.status-card,
.empty-state {
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.2rem;
  color: var(--text);
  font-weight: 600;
}

.error {
  border-color: #fecaca;
  background: #fff1f2;
  color: #b91c1c;
}

.feedback-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.full-width {
  grid-column: 1 / -1;
}

label {
  font-weight: 700;
  color: var(--text);
}

input,
textarea,
select {
  width: 100%;
  padding: 0.8rem 0.9rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: white;
  color: var(--text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.error-text {
  color: var(--danger);
  font-weight: 600;
}

.success-message,
.error-message {
  padding: 0.8rem 1rem;
  border-radius: 10px;
  font-weight: 600;
}

.success-message {
  background: #ecfdf5;
  color: var(--success);
  border: 1px solid #bbf7d0;
}

.error-message {
  background: #fff1f2;
  color: var(--danger);
  border: 1px solid #fecaca;
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.rating-text {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #f59e0b;
  font-weight: 700;
}

.rating-number {
  color: var(--text);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .navbar {
    display: block;
    padding: 1rem;
  }

  .nav-brand {
    margin-bottom: 0.8rem;
  }

  .nav-links {
    justify-content: flex-start;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-card,
  .form-card {
    padding: 1rem;
  }
}
