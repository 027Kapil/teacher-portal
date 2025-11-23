const FileUpload = ({ onChange }) => (
  <div className="col-12">
    <label className="form-label">Upload Resume *</label>
    <div className="border border-2 border-dashed p-4 text-center rounded bg-light">
      <input
        type="file"
        className="form-control"
        accept=".pdf,.doc,.docx"
        name="resume"
        onChange={onChange}
        required
      />
      <small className="text-muted">Only PDF or Word files (Max 2MB)</small>
    </div>
  </div>
);

export default FileUpload;
