import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Criar uma instância do provedor do Google
  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Fazer login com Firebase Auth usando e-mail e senha
      await signInWithEmailAndPassword(auth, email, password);
      // Após sucesso, redirecionar para o painel de administração
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login: verifique suas credenciais.');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Fazer login com o Google
      await signInWithPopup(auth, provider);
      // Após sucesso, redirecionar para o painel de administração
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
      alert('Erro ao fazer login com Google.');
    }
  };

  return (
    <div>
      <h1>Login Administrativo</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <hr />
      <button onClick={handleGoogleLogin}>Login com Google</button>
    </div>
  );
};

export default Login;
