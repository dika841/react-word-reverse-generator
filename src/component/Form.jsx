const Input = ({ teks, value, className, onChange, placeholder }) => {
  return (
    <input
      value={value}
      type={teks}
      className={className}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

const Button = ({ onClick, className, teks }) => {
  return (
    <button onClick={onClick} className={className}>
      {teks}
    </button>
  );
};

export { Input, Button };
