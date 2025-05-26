import React,{useState} from "react";
const LoginForm = () =>
    {
        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        const [successMsg, setSuccessMsg] = useState('');
        const handleSubmit=async (e)=>
            {
                e.preventDefault();
                const res = await fetch('http://localhost:5000/login', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email, password }),
                });
              
                const data = await res.json();
              
                if (res.ok) {
                  setSuccessMsg(data.message);
                } else {
                  setSuccessMsg('');
                  alert(data.message);
                }
            }
    return(
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {successMsg && <h2>{successMsg}</h2>}
    </form>
  );
}
export default LoginForm;
        
