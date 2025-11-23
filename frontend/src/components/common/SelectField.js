const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="col-md-6">
    <label className="form-label">{label} *</label>
    <select className="form-select" name={name} value={value} onChange={onChange} required>
      <option value="">Select {label}</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

export default SelectField;
