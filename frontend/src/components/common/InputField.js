const InputField = ({ label, name, type="text", value, onChange, placeholder, required=true }) => (
  <div className="col-md-6">
    <label className="form-label">{label}{required && " *"}</label>
    <input
      type={type}
      className="form-control"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default InputField;
